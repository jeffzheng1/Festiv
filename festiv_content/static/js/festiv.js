var nextArtist, previousArtist, spinner;

var mainArtists = new Array("Hardwell", "Avicii", "'Nicky Romero'", "'David Guetta'", "W&W", "Inpetto", "'Swedish House Mafia'", "Deorro",
    "Carnage", "'Martin Garrix'", "BlasterJaxx", "Kaskade", "Dada Life", "Flosstradamus", "Krewella", "Tiesto","'Gents & Jawns'", "'Mat Zo'", "'Steve Aoki'", 
    "'Dillon Francis'", "Diplo", "Baauer", "RL Grime", "Armin Van Buuren", "'Bingo Players'", "Nervo", "Axwell", "Calvin Harris", "Alesso", "Sander Van Doorn", 
    "'Porter Robinson'", "'Adventure Club'", "Zedd", "Deniz Koyu", "'Chris Lake'", "Deadmau5", "Vicetone", "R3hab", "Dimitri Vegas", "Audien", "Arty", "'Dash Berlin'",
    "'Sebastian Ingrosso'", "'Above & Beyond'", "'Fredde Le Grand'", "Dyro", "'Steve Angello'", "Chuckie", "'Gareth Emery'", "'Tommy Trash'", "Madeon", "'Project 46'", 
    "Dannic", "'Ummet Ozcan'", "Afrojack", "Showtek", "'Laidback Luke'", "Cazzette", "'Major Lazer'", "'Weekend Workout'", "Tritonal", "Firebeatz", "'Zeds Dead'", 
    "'Marcus Schulz'","'Ferry Corsten'", "'Aly & Fila'", "'Wolfgang Gartner'", "'Otto Knows'", "DubVision", "'Spinnin' Sessions'", "Benny Benassi", "3lau");

var chillwaveArtists = new Array("'Ryan Hemsworth'", "Bondax", "Snakehips", "'Sweater Beats'", "Eton Messy", "Disclosure", "Joe Hertz", "Kaytranada", 
    "Chromeo", "Moon Boots", "Flume", "mr.carmack", "Star Slinger", "Alt-J", "FDVM", "chill music", "Eric Prydz", "Stwo", "Klingande");

var trapArtists = new Array("Flosstradamus", "Heroes & Villains", "Carnage", "Lookas", "Slander", "Luminox", "Yellow Claw", "Tomsize", "Ookay", "RL Grime", "Baauer", 
    "Diplo", "What So Not", "LOUDPVCK", "Aero Chord");

var tranceArtists = new Array("Armin van Buuren", "Aly & Fila", "Audien", "Marcus Schulz", "Above and Beyond", "Dash Berlin", "Andrew Rayel", "Paul van Dyk", 
    "ATB", "Ferry Corsten", "Orjen Nilsen", "Gareth Emery", "Cosmic Gate", "Mat Zo", "Paul Oakenfold");

var playedArtists = new Array(); 

var first = true;

function contains(array, obj) {
    var index = array.length;
    if (index > 15) {
        a.shift(); 
    }
    while (index--) {
       if (array[index] === obj) {
            return true;
       }
    }
    return false;
}

function resetLabels() { 
    $('#mainstage').attr("data-hover", "Play Set");
    $('#tranceStage').attr("data-hover", "Play Set");
    $('#chillwaveStage').attr("data-hover", "Play Set");
    $('#trapStage').attr("data-hover", "Play Set");
}

function getJSONP(url, success) {
    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;
    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };
    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
}

var everyOther = 0;

function myEmbed(url) { 
    var query = "https://soundcloud.com/oembed?url=" + url + "&format=js&callback=?&maxheight=500&maxwidth=600&auto_play=true";
    getJSONP(query, function(data){
        if (everyOther == 2) {
            $(".remove").remove();
            $("iFrame").addClass("remove");
            everyOther = 1;
        }
        spinner.stop();
        $('#target').append(data.html);
        if (everyOther != 2) {
            if (everyOther == 0) { 
                $("iFrame").addClass("remove");
            }
            everyOther += 1;
        }
        $("iFrame").attr("width", "45%");
        $("iFrame").attr("height", "100%");
        $("iFrame").css("margin-right", "10px");
    });  
}

function playTrack(artist) { 
    if (spinner == null) {
        var opts = {top: '60%', // Top position relative to parent
                    left: '50%' // Left position relative to parent
                    };
        spinner = new Spinner(opts).spin();
    } else { 
        spinner.spin();
    }
    $('#target').append(spinner.el);
    SC.get('/tracks', { 
        q: artist, 
        duration: { 
            from: 1800000 
        }
    }, function(tracks) { 
        var random = Math.floor(Math.random() * tracks.length); 
        if (tracks.length == 0) {  
            var anchors = document.getElementsByClassName('mainstage');
            nextArtist = mainArtists[random];
            while (previousArtist == nextArtist) { 
                random = Math.floor(Math.random() * (mainArtists.length)); 
                nextArtist = mainArtists[random];
            }
            playTrack(nextArtist);
            previousArtist = nextArtist;
        } else if (tracks.length > 15) { 
            random = Math.floor(Math.random() * 15); 
        }
        myEmbed(tracks[random].permalink_url);
    }); 
}

function animateHome() { 
    if (first) {
        $('#leftName').addClass('animated fadeIn');
        $('#welcome-messages').addClass('animated fadeOut');
        $( "#welcome-messages" ).animate({
            bottom: 90
        });
        $( "#myCarousel" ).animate({
            bottom: 90
        });
        first = false;
    }
}

function playArtists(genreArtists) { 
    animateHome();
    var random = Math.floor(Math.random() * genreArtists.length);
    nextArtist = genreArtists[random];
    while (contains(playedArtists, nextArtist)) { 
        random = Math.floor(Math.random() * genreArtists.length);
        nextArtist = genreArtists[random];
    }
    playTrack(nextArtist);
    playedArtists.push(nextArtist);
}

window.onload = function() { 
    SC.initialize({
        client_id: "80a1383f12c34abe9573ff35aad39826",
    });

    var mainstageButton = document.getElementById('mainstage'); 
    mainstageButton.onclick = function(e) { 
        e.preventDefault(); 
        playArtists(mainArtists);
        resetLabels();
        $('#mainstage').attr("data-hover", "Next Set");
    }

    var tranceStageButton = document.getElementById('tranceStage');
    tranceStageButton.onclick = function(e) { 
        e.preventDefault();
        playArtists(tranceArtists);
        resetLabels();
        $('#tranceStage').attr("data-hover", "Next Set");
    }

    var chillwaveStageButton = document.getElementById('chillwaveStage');
    chillwaveStageButton.onclick = function(e) { 
        e.preventDefault();
        playArtists(chillwaveArtists);
        resetLabels();
        $('#chillwaveStage').attr("data-hover", "Next Set");
    }

    var trapStageButton = document.getElementById('trapStage');
    trapStageButton.onclick = function(e) { 
        e.preventDefault();
        playArtists(trapArtists);
        resetLabels();
        $('#trapStage').attr("data-hover", "Next Set");
    }
    
    var searchButton = document.getElementById('frontpageButton'); 
    searchButton.onclick = function search(e) { 
        e.preventDefault(); 
        var searchedDJs = document.getElementsByClassName('input-lg');
        var searchedDJ = searchedDJs[0];
        animateHome();
        playTrack(searchedDJ.value);
        resetLabels();
    }

    var featuredButton = document.getElementById('featuredSet'); 
    featuredButton.onclick = function(e) { 
        e.preventDefault(); 
        myEmbed("https://soundcloud.com/kaskade/live-at-marquee-las-vegas");
        animateHome();
        resetLabels();
    }
}