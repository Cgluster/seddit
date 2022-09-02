export const reddit_api = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
    const resposne = await fetch(`${reddit_api}${subreddit}.json`);
    const json = await resposne.json();

    return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
    const response = await fetch(`${reddit_api}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};

export const getComments = async (permalink) => {
    const response = await fetch()(`${reddit_api}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
};