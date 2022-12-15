function p(a, c) {
  var r = /////////////////////// contact me for info https://t.me/scrapguru //////////////
  return r
}

function q(a) {
  var b = []; 
  for (var c = 0; c < a.length; c += 2) b.push(parseInt(a.slice(c, c + 2), 16));
  return new Uint8Array(b)
}

function encrypt(a, c, d, e) {
  var f, r, s, t, u, v;

  f = o + d.length;
  r = q(c);

  s = new Uint8Array(f);
  t = 0;
  s[t] = h;
  t += i;
  s[t] = a;
  t += j;
  u = {
    name: "AES-GCM",
    length: m * 8
  };
  v = {
    name: "AES-GCM",
    iv: new Uint8Array(12),
    additionalData: e,
    tagLen: n
  };

  return //////// contact me for info https://t.me/scrapguru //////////////
}

var enc = encrypt(
  180,
  "7573d604a560e4a6c548839686c8ceed247ad7aa5202804b6460a0ac77f0f742",
  ///////////
)

var enc_password = "#PWD_INSTAGRAM_BROWSER:10:" + time + ":" + enc;
console.log(enc_password)
