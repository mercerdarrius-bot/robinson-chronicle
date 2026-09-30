/* ============================================================
   GUEST LIST  ·  Robinson Party of Two
   One entry per household. Guests find their invitation by typing
   any name listed in `names`. The `id` is also a personal link:
     https://mercerdarrius-bot.github.io/robinson-chronicle/?h=mercer
   which greets the household by name on the entrance and pre-fills RSVP.

   Fields
     id        short slug, letters and dashes only (used in the personal link)
     household how the invitation is addressed ("Darrius & Carrington")
     names     every person on the invitation, "First Last"
     seats     seats reserved (usually names.length)
     aruba     true if this household is invited to the ceremony in Aruba
     plusOne   true if they may add one unnamed guest

   Replace these sample households with the real list. Keep the shape.
   ============================================================ */
const GUESTS = [
  { id: "mercer",   household: "Darrius & Carrington", names: ["Darrius Mercer", "Carrington Mercer"], seats: 2, aruba: true,  plusOne: false },
  { id: "sample-a", household: "The Sample Family",    names: ["Sample Guest", "Second Guest"],        seats: 2, aruba: true,  plusOne: false },
  { id: "sample-b", household: "Jordan",               names: ["Jordan Sample"],                      seats: 1, aruba: false, plusOne: true  },
];
