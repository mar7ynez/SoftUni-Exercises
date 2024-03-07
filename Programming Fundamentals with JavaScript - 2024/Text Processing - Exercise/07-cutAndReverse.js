function cutAndReverse(randomString) {

    let firstHalfOfString = randomString.split('').slice(0, randomString.length / 2).reverse();
    let secondHalfOfString = randomString.split('').slice(randomString.length / 2, randomString.length).reverse();

    console.log(firstHalfOfString.join(''));
    console.log(secondHalfOfString.join(''));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');