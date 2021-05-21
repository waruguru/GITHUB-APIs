export class RepoClass {
    constructor (
        public name:string,
        public updated_at:Date,
        // public private:boolean,
        public html_url:string,
        public clone_url:string,
        public git_url:string,
        public pushed_at:string,
        public collaborators_url:string
    ){}
}
