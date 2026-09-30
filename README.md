# Robinson Party of Two

Single-page wedding site and RSVP for the Robinsons. Static HTML, no build step. Live at https://mercerdarrius-bot.github.io/robinson-chronicle/

## Design
Cream paper (#F6F0E4), emerald (#145A45 / #0E3F31), burnt orange (#B85C2C). Cormorant Garamond for display and body, Pinyon Script for signatures, Jost for small caps labels. Sections: hero with countdown, welcome, love story in four numbered chapters (Friendship, A First Date, God's Timing, The Proposal), Why Aruba, Our Song player, calendar with the date circled, Our Next Chapter, A Table for 2 motto, letter to family and friends, RSVP.

## Photos (img/)
| File | Where it is used |
|---|---|
| 11-laughing.jpg | Hero |
| 01-fence-lookout.jpg | Chapter I |
| 05-walking-beach.jpg | Chapter II |
| 15-night.jpg | Chapter III (arch) |
| 12-proposal-wide.jpg, 13-proposal-kiss.jpg | The Proposal |
| 06-wading.jpg | Why Aruba (arch) |
| 08-almost-kiss.jpg | Song cover |
| 14-tux.jpg | Our Next Chapter (arch) |

Unused but kept for swaps: 02, 03, 04, 07, 09, 10, 16-color-kiss.jpg.

## Song (audio/)
`audio/our-song.mp3` is "I Found My Forever in You" by Love in Lyricz. If the file changes, bump the `?v=` in `songSrc` so browsers refetch it.

## Fill in the details
Everything editable is the `CONFIG` object at the bottom of index.html: reception date and venue, dress code, RSVP deadline, and where replies go (`rsvpEndpoint` for a JSON POST endpoint such as Web3Forms, or `rsvpEmail` for a prefilled email). Until one of those is set, the form shows the thank-you but the reply is not delivered anywhere.

## Preview and deploy
    python3 -m http.server 4173
Deploy = commit and push to main. GitHub Pages rebuilds in about a minute.
