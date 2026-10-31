// The Neighborhood Crew - the only JavaScript on the site.
// Change your phone number here if it ever changes (also update the tel:/sms: links in index.html).
var SITE_PHONE = "+16132767415";

var form = document.getElementById("quote-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = "Hi, I'm " + d.get("name") + ". Quote request for " + d.get("package") +
      " (" + d.get("driveway") + ") at " + d.get("address") +
      ". Call or text me at " + d.get("phone") + ".";
    form.hidden = true;
    document.getElementById("sent").hidden = false;
    window.location.href = "sms:" + SITE_PHONE + "?&body=" + encodeURIComponent(body);
  });
}
