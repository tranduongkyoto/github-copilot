const token = process.env.TWITTER_BEAER_TOKEN;

const fetchTweetsFromUser = async (user) => {
  const response = await fetch(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=200&tweet_mode=extended`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const tweets = await response.json();
  return tweets;
};
