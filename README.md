# Robinson Party of Two

Single-page wedding site and RSVP for the Robinsons. Static HTML, no build step, no backend. Live at https://mercerdarrius-bot.github.io/robinson-chronicle/

## The experience
1. Entrance: black screen, the R monogram draws itself, "You are invited to take your seat", Open Invitation, the card unfolds, Enter the Celebration. Shown once per browser session. Add `?invite=1` to force it.
2. Hero with rolling countdown, then the reserved-seat strip.
3. The story in four cinematic chapters (Friendship, The First Date, God's Timing, The Proposal) ending in a full-screen "Yes." that the rose-heart photo rises behind.
4. Aruba: coordinates, "Meet us in Aruba", why Aruba, the four-day weekend, the guest concierge, a drawn island map.
5. The Date with the calendar, A Table for 2, the letter, then RSVP.
6. Floating song player in the lower corner that keeps playing while guests scroll.

## RSVP
A straightforward form: name, email, accepts or declines, seats and names in the party, Aruba or at home, events, arrival and hotel (Aruba only), meal, dietary needs, song request, phone, message. Declining collapses it to the essentials.

## Fill in the details
Everything editable is the `CONFIG` object at the bottom of index.html: reception date, RSVP deadline, the weekend schedule, event names, meal choices, every concierge answer (blank shows "Details to follow"), and where replies go (`rsvpEndpoint` for a JSON POST endpoint such as Web3Forms, or `rsvpEmail` for a prefilled email). Until one of those is set, the form shows the confirmation but the reply is not delivered anywhere.

## After the wedding
The day after March 6, 2027 the hero countdown becomes "We did." and the archive section appears automatically. Drop photos and a film link into that section when they are ready.

## Photos and song
Photos are in `img/`. The song is `audio/our-song.mp3` ("I Found My Forever in You", Love in Lyricz). If the file changes, bump the `?v=` in `songSrc`.

## Preview and deploy
    python3 -m http.server 4173
Deploy = commit and push to main. GitHub Pages rebuilds in about a minute.
