export interface Notification {
    postId: string;
    notificationId: string;
    type: number; //1 kedveles, //2 kovetes
    usernameId: string;
    date: Date;
}