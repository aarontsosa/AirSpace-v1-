$(document).ready( () => {
    $('.about-button').click( () => {
        var about = `
            AirSpace is a group response platform that allows group members
            to provide feedback and answer a host user's questions.<br><br>
            Group members can initiate or join existing sessions via phone, tablet,
            or computer by entering their host's unique passport key.
            The host can then send surveys and view member responses in real time.
            `;

        // populates empty div with content in 'about'
        $('#about-box').html(about);
        $('#about-box').css({
            border: "1px solid white",
            padding: "2rem",
            width: "70%",
            "font-size": "1rem",
        });

        // adds title for about section
        $('#about-box').prepend("<h3 class='about-title'>About</h3>");
        $('.about-title').css({
            "text-align": "center",
            margin: "0 0 .5rem 0"
        });

        // adjust video background to size up-- no spillover to white space
        $('.video-holder').css( "height", $('body').height() + 400);
    });

    $('.how-button').click( () => {
        var howItWorks = `
        A Host can be a teacher, team leader, presenter, or just someone
        at the party who loves a good party game.<br><br>
        A Guest can be a student, team member, an audience member, or
        skeptical party guest along for the ride.<br><br>
        A Host will be assigned a unique passport key after selecting "Host" on the front page.
        They will then have the option to create a survey.
        [**insert picture of "Create Survey" prompt**]<br><br>
        After creating a survey, Hosts should then share their unique passport key
        with their intended Guests.[**insert picture of passport key**]
        In other words, if you want someone to take your quiz or join your party game,
        you have to let them know what your unique passport key is,
        so that they can enter it on the Guest Page. [**insert picture of guest page**]<br><br>
        Once a Guest enters the Host's passport key on the Guest Page,
        they will either be directed to the Host's active survey, or to the
        Waiting Room. If the Host has not activated a survey, their Guests will remain
        in the Waiting Room until the Host activates a survey.
        [**insert picture of survey activation toggle**]
        Hosts can also activate already-existing surveys previously created
        under their unique passport key.<br><br>
        Once Guests are brought to a survey page, they can fill out their answers
        and submit the survey to the Host in real time.
        The Host will be able to view Guest submissions on their Host Dashboard
        as they come in.[**insert picture of Host Dashboard page**]<br><br>
        The rest is up to the Host!<br><br>
        **//Give further explanation of what will happen if it's a quiz, or a party game.**<br><br>
        Our hope is that AirSpace will facilitate group communication in all kinds of different contexts--
        work, play, and learning.
        `;

        // populates empty div with content in 'howItWorks'
        $('#how-box').html(howItWorks);
        $('#how-box').css({
            border: "1px solid white",
            padding: "2rem",
            width: "70%",
            "font-size": "1rem",
        });

        // adds title for how it works section
        $('#how-box').prepend("<h3 class='how-title'>How It Works</h3>");
        $('.how-title').css({
            "text-align": "center",
            margin: "0 0 .5rem 0"
        });

        // adjust video background to size up-- no spillover into white space
        $('.video-holder').css( "height", $('body').height() + 400);
    });

    $('.contact-button').click( () => {
        var contact = `
        Github
        `
        // populates empty div with content in 'contact'
        $('#contact-box').html(contact);
        $('#contact-box').css({
            border: "1px solid white",
            padding: "2rem",
            width: "70%",
            "font-size": "1rem",
        });

        // adds title for how it works section
        $('#contact-box').prepend("<h3 class='contact-title'>Contact</h3>");
        $('.contact-title').css({
            "text-align": "center",
            margin: "0 0 .5rem 0"
        });

        // adjust video background to size up-- no spillover to white space
        $('.video-holder').css( "height", $('body').height() + 400);
    });
});