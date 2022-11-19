export interface Notification {
    postId: string;
    notificationId: string;
    type: number; //0 kedveles, //1 kovetes
    username: string;
    ertesitestKapoUsernameId: string;
    ertesitestAdoUsernameId: string;
    date: Date;
    ertesites: String
}