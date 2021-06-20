export class Repo {
    constructor(
        public name:string,
        public description:string,
        public stargazers_count:number,
        public forks_count:number,
        public language:string,
        public svn_url:string
    ){}
}
