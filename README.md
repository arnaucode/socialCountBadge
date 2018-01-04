# socialCountBadge

## Install
```
bower install --save socialCountBadge
```

Add to the index.html:
```html
<link href="bower_components/socialCountBadge/socialCountBadge.css" rel="stylesheet">


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="bower_components/socialCountBadge/socialCountBadge.js"></script>
```

Declare the badges variable:
```html
<script>
var badges = {
    hn: {
        link: "https://news.ycombinator.com/item?id=16069200",
        url:"https://hacker-news.firebaseio.com/v0/item/16069200.json",
        callback: parseHN,
        img: "img/hackernews.png",
        count: null
    },
    reddit: {
        link: "https://www.reddit.com/r/Python/comments/7o23lb/hacking_wifi_to_inject_cryptocurrency_miner_to/",
        url:"https://www.reddit.com/r/Python/comments/7o23lb/hacking_wifi_to_inject_cryptocurrency_miner_to.json",
        callback: parseReddit,
        img: "img/reddit.png",
        count: null
    }
};
</script>
```
