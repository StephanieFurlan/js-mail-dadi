var emailList = ["bgething0@timesonline.co.uk", "hkless1@senate.gov", "amcmanamon2@nytimes.com", "relsey3@altervista.org", "cskippon4@sohu.com", "saleavy5@paginegialle.it", "hbayliss6@geocities.jp", "aclews7@smugmug.com", "ggrimmolby8@vkontakte.ru", "ibatchelder9@liveinternet.ru", "ahobella@whitehouse.gov", "gnutterb@aboutads.info", "lclayworthc@senate.gov", "ljoynesd@state.gov", "pcleimente@guardian.co.uk", "rmccumeskyf@jimdo.com", "sburridgeg@bloomberg.com", "htuckleyh@altervista.org", "cbenzai@instagram.com", "mondrusekj@surveymonkey.com", "kfairmank@paginegialle.it", "mpilmorel@cyberchimps.com", "rcolganm@hubpages.com", "scollingsn@tripadvisor.com", "bfirmino@1und1.de", "dtimbsp@techcrunch.com", "ltempletonq@list-manage.com", "mfordhamr@statcounter.com", "khandovers@sohu.com", "jticict@mapquest.com", "brumgayu@va.gov", "fdavidiv@engadget.com", "ffobidgew@twitter.com", "bhonnanx@liveinternet.ru", "vingramy@cafepress.com", "mgattyz@sciencedaily.com", "eisacke10@mozilla.org", "tvernay11@whitehouse.gov", "jhallbird12@china.com.cn", "bfowden13@devhub.com", "ltrussler14@ycombinator.com", "amacilhargy15@state.tx.us", "rcathel16@mail.ru", "qcutchey17@moonfruit.com", "ckinglesyd18@nbcnews.com", "pspiring19@bandcamp.com", "bmartinelli1a@people.com.cn", "kpaszek1b@netlog.com", "hdashkov1c@list-manage.com", "bcowle1d@surveymonkey.com", "gternouth1e@wp.com", "pruxton1f@statcounter.com", "vmakin1g@amazon.de", "mphlipon1h@admin.ch", "bwagstaffe1i@feedburner.com", "dskillings1j@ted.com", "klimpkin1k@pinterest.com", "chacquel1l@feedburner.com", "cgregoli1m@npr.org", "fdickings1n@tiny.cc", "sveel1o@businessweek.com", "rslack1p@va.gov", "lsandsallan1q@ca.gov", "ccheatle1r@xing.com", "kfevers1s@simplemachines.org", "kohollegan1t@angelfire.com", "twilleman1u@github.io", "cstevings1v@github.com", "twillshear1w@edublogs.org", "jcoughan1x@columbia.edu", "umegarrell1y@salon.com", "hcrop1z@youtu.be", "jallom20@kickstarter.com", "fgoaks21@bloglines.com", "tcasiroli22@weather.com", "evaune23@europa.eu", "iclopton24@weather.com", "jdunnan25@time.com", "baupol26@newsvine.com", "modonoghue27@weibo.com", "cphelan28@theguardian.com", "cfetherby29@mapy.cz", "gkobelt2a@toplist.cz", "msawle2b@cdc.gov", "gwakeford2c@geocities.jp", "mtolworth2d@blogspot.com", "rkike2e@ox.ac.uk", "jdivill2f@mayoclinic.com", "vmarvel2g@timesonline.co.uk", "econneau2h@blogspot.com", "bacutt2i@deviantart.com", "rwilmore2j@furl.net", "rjagiello2k@intel.com", "mpennazzi2l@opera.com", "smyhan2m@dropbox.com", "bknottley2n@geocities.jp", "lcousin2o@so-net.ne.jp", "egrute2p@youtu.be", "belcock2q@washingtonpost.com", "foliffe2r@spiegel.de"]

var email = prompt("Write your email");

var result = false;
for (var i = 0; i < emailList.length; i++) {
   if (emailList[i] == email) {
      result = true;
      break;
   }
   console.log(i);
}

if (result) {
   alert("You are registered!");
} else {
   alert("You are not registered!");
}
