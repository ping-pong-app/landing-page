import { Author } from "../config/blog-author.config";
import authors from "../../blog/authors.json";


export class AuthorService {
    public static getAuthor(authorId: string): Author {
        const data = authors[authorId];
        if (data) {
            return {
                avatar: data.avatar,
                github: data.github,
                name: data.name
            };
        }
        throw new SyntaxError("Invalid author Id!");
    }
}
