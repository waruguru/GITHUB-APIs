export class User {
    constructor(
        public login:string,
        public name:string,
        public location:string,
        public followers:number,
        public following:number,
        public public_repos:number,
        public created_at:Date,
        public avatar_url:string,
        public html_url:string,
        public bio:string,
        public updated_at:Date
        ){ }
}
