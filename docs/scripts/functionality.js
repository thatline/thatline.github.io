var lines = [];
var errorLine = {
    artist: "",
    line: "error loading data",
    title: "",
    genius_link: ""
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cleanLine(line) {
    return "&ldquo;" + line.replaceAll("//", "<br>") + "&rdquo;";
}

function getNextLine() {
    return lines[getRandomInt(lines.length)];            
}

function hasData() {
    return !(lines.length === 0 || (lines.length === 1 && lines[0].line == errorLine.line));
}

function updateLine() {
    if (!hasData()) {
        lines = [errorLine];
    }

    var entry = getNextLine();

    $(".line").html(cleanLine(entry.line));
    $(".title").text(entry.song);
    // TODO: move this "By " to the template out of the code
    $(".artist").text(entry.artist);
    $(".link").attr("href", entry.genius_link);

    $('.line').html(widont($('.line').text(), 'html'));
}

$(".next-btn").click(function() {
    updateLine();
});

$(function() {
    $.getJSON("/data/lines.json", function(data) {
        // TODO: error handling
        if (data.length > 0) {
            lines = data;
        }
        updateLine();
    });
    twemoji.parse(document.body);
});