type Category = 
| "general"
| "business"
| "entertainment"
| "health"
| "science"
| "sports"
| "technology"


type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    urlToImage: string | null;
    language: string;
    publishedAt: string;
    source: string;
    title: string;
    url: string
}

type Paginationv = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}

type NewsResponce = {
    pagination: Pagination;
    articles: Article[];
}