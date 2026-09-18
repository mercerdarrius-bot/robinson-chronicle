# The Robinson Chronicle

Single-page, newspaper-styled save the date and reception RSVP. No build step.

## Photos (img/)
All ten engagement photos are in place (copied from Downloads IMG_1059 to IMG_1093). Slot map:

| File | Photo |
|---|---|
| img/01-fence-lookout.jpg | Landscape. Backs to camera at the beach fence, her hand on his shoulder |
| img/02-embrace-driftwood.jpg | Portrait. Embrace, she looks over his shoulder at the camera |
| img/03-driftwood-smiling.jpg | Landscape. Both smiling beside the driftwood (HERO) |
| img/04-backs-ocean.jpg | Landscape. Backs to camera, arms around each other, open water |
| img/05-walking-beach.jpg | Portrait. Walking barefoot, holding hands |
| img/06-wading.jpg | Portrait. Walking into the water, backs to camera |
| img/07-cheek-hold.jpg | Portrait. Her hand on his cheek |
| img/08-almost-kiss.jpg | Portrait. Nose to nose, about to kiss (album cover) |
| img/09-kiss.jpg | Portrait. The kiss |
| img/10-gazing-shore.jpg | Portrait. Standing close, looking toward the water |

## Add the song (audio/)
The couple's song is in place at `audio/our-song.mp3` (from Downloads/RobinsonSong.mp3, 4:32). Title and artist are set in CONFIG: "I Found My Forever in You" by Love in Lyricz.

## Fill in the details
Everything editable lives in the `CONFIG` object at the bottom of index.html: destination city, reception date and venue, dress code, RSVP deadline, and where replies go (`rsvpEndpoint` for a Formspree-style JSON endpoint, or `rsvpEmail` for a prefilled email).

## Preview
    python3 -m http.server 4173
then open http://localhost:4173
