function seriesCalculator(input) {

    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let episodeLength = Number(input[3]);

    let adds = episodeLength * 0.20;
    let timeForAllEpisodes = (seasonsCount * episodeCount) * (episodeLength + adds) + (seasonsCount * 10);

    console.log(`Total time needed to watch the ${seriesName} series is ${timeForAllEpisodes} minutes.`);
}
seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"]);