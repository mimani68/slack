export class Message {

    constructor({
        id,
        cache,
        client,
        workspaceId,
    }) {
        this.id = id;
        this.workspaceId = workspaceId;
        this.cache = cache;
        this.client = client;
    }

    cacheKey(...parts) {
        return [`channel#${this.workspaceId}#${this.id}`].concat(parts).join(':');
    }

    async post(message) {
        const res = await this.client.chat.postMessage({
            channel: this.id,
            ...message.toJSON(),
        });
        return res;
    }

    async update(ts, message) {
        const res = await this.client.chat.update({
            ts,
            channel: this.id,
            ...message.toJSON(),
        });
        return res;
    }

    async rollup(message, {
        postNewIf = true,
        forceNew = false
    } = {}) {
        const cacheKey = this.cacheKey(message.identifier);

        const {
            ts
        } = (await this.cache.get(cacheKey)) || {};

        if (!forceNew && ts) {
            return this.update(ts, message);
        } else if (postNewIf) {
            const res = await this.post(message);
            await this.cache.set(cacheKey, {
                ts: res.ts,
                channel: this.id
            });
            return res;
        }
    }

    get chat() {
        return this.client.chat;
    }

};