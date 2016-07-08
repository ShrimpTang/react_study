/**
 * Created by Shrimp on 16/7/3.
 */
//const baseUrl = `http://picaman.picacomic.com/api/`;
function supplant(str, obj) {
    return obj ? str.replace(
        /\{([^{}]*)\}/g,
        function (a, b) {
            var r = obj[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    ) : str;
}

//export const baseUrl = `http://localhost:9003/api/`;
export const baseUrl = `http://45.78.12.132:9003/api/`;

export const apiUrls = {
    getCategories: baseUrl + 'categories',
    getComicDetail: baseUrl + 'comics/{id}',
    getComicListByCatId: baseUrl + 'categories/{id}/page/{page}/comics',
    getComicListByType: baseUrl + 'categories/where/{type}/page/{page}/comics',
    getRandomComicList: baseUrl + 'comics/random',
    getCommentListByComicId: baseUrl + 'comics/{comicId}/comments/page/{page}',
    getEpisode: baseUrl + 'comics/{comicId}/ep/{episode}',
    postComment: baseUrl + 'comics/{comicId}/comment',
    searchComics: baseUrl + 'search/{keyword}/comics/page/{page}',
    getComicsByUserId: baseUrl + 'user/{uid}/comics/page/{page}',
    updateRank: baseUrl + 'comics/{comicId}/rank',
};

export function getCategories() {
    return fetch(apiUrls.getCategories).then(r=>r.json());
}

export function getComicListByCatId(obj) {
    return fetch(supplant(apiUrls.getComicListByCatId, obj)).then(r=>r.json());
}

export function getComicDetail(obj) {
    return fetch(supplant(apiUrls.getComicDetail, obj)).then(r=>r.json());
}

export function getEpisode(obj){
    return fetch(supplant(apiUrls.getEpisode, obj)).then(r=>r.json());
}