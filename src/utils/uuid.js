export default function getUuid() {
  var s = [];
  var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < 16; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }

  s[8] = "-"
  let uuid = s.join("")
  return uuid
}
