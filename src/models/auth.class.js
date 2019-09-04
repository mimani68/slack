import { authTable } from "../../db/auth.db";

export class AuthUserAuthModel {

    constructor(
        team_id,
        token
    ) {
        this.team_id = team_id;
        this.token   = token;
    }

    getAllUserAuth() {
        return authTable;
    }
    getUserAuthWithId( id ) {
        let UserAuths = this.getAllUserAuth();
        for (let index = 0; index < UserAuths.length; index++) {
            if ( UserAuths[index]['id'] === id ) {
                return UserAuths[index];
            }
        }
    }
    createUserAuth() {
        authTable.push({
            team_id: team_id,
            token:   token
        })
    }
    deleteUserAuth() {
        return null
    }
    updateUserAuth() {
        return null
    }
}