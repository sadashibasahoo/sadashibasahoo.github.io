# ସଦାଶିବ ସାହୁ | Sadashib Sahoo

Website of Sadashib Sahoo, Odia poet and singer of devotional songs: his life,
his books ବର୍ଣ୍ଣମାଳା ଚଉତିଶା and ଭକ୍ତି ଗୀତ ମାଳା, and his songs on
[YouTube](https://www.youtube.com/channel/UCPmlZ3nj8wcgJ7lA-Mc1lHQ).

## What is where

| Path | Contents |
|---|---|
| `index.html` | the whole website (one page) |
| `assets/css/style.css` | colours, type and layout |
| `assets/js/main.js` | plays a YouTube song in place when it is clicked |
| `assets/fonts/` | Anek Odia web font (SIL Open Font Licence) |
| `assets/img/` | portrait, book covers, site icon |
| `books/` | the two books as PDFs, plus A4 booklet versions for printing |

## Common updates

- **New edition of a book:** replace the PDF in `books/` with a file of the same name.
- **New YouTube song:** copy one `<li class="track">…</li>` block in `index.html`
  and change the video ID (the part after `watch?v=`) in its three places, and the title.
- **Text changes:** edit `index.html` directly on GitHub (pencil icon), then commit.

Changes go live on GitHub Pages a minute or two after each commit.
