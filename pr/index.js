var tweet = {
    likes: 16,
    likes(){
        return this.likes;
    },
    likes(value) {
        var likes = parseInt(value);

        if(isNaN(likes) || likes < 0){
            throw new TypeError('wrong value')
        }

        this.likes = likes;
    },
    linkify() {
        this.text.replace(/(#([a-z0-9а-я]+))/gi, `<a href="$2">$1</a>`)
        reg = /(#([a-z0-9а-я]+))/gi
    }
}
try {
    tweet.setLikes("NaN");
} catch(e) {
    e.name;
    e.message;
    e.stack;
    if(e instanceof TypeError){
        tweet.setLikes(0);
    }
    console.error(0);
}

