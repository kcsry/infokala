# Get the midnight of the day of the given timestamp
exports.getDayStart = (timestamp) =>
  date = new Date timestamp
  new Date(date.getFullYear(), date.getMonth(), date.getDate())


# Utility: Escape HTML.
exports.escapeHtml = (str) =>
  String(str).replace /[&<>"'\/]/g, (s) ->
    {
      "&": "&amp;"
      "<": "&lt;"
      ">": "&gt;"
      "/": '&#x2F;'
      '"': '&quot;'
      "'": '&#x27;'
    }[s]