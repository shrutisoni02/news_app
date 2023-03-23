export default function sortNewsByImage(news : NewsResponce) {
    if (!news || !news.articles) {
        return null;
      }
    const newsWithImage = news.articles.filter(item => item.urlToImage !== null );
    const newsWithOutImage = news.articles.filter(item => item.urlToImage === null );

    const sortedNewsResponce = {
        pagination: news.pagination,
        data: [ ...newsWithImage, ...newsWithOutImage ]
    }
    return sortedNewsResponce;
}