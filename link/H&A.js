function shareOnFacebook() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://www.facebook.com/' + url, '_blank');
  }
  
  function shareOnTwitter() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://twitter.com/intent/tweet?url=' + url, '_blank');
  }
  
  function shareOnLinkedIn() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://www.linkedin.com/shareArticle?url=' + url, '_blank');
  }