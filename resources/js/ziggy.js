const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"]},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"]},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"]},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"]},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"]},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"api.get.role.read":{"uri":"api\/get\/role\/read","methods":["GET","HEAD"]},"api.get.role.permission.read":{"uri":"api\/get\/role\/permission\/read","methods":["GET","HEAD"]},"welcome":{"uri":"\/","methods":["GET","HEAD"]},"home":{"uri":"home","methods":["GET","HEAD"]},"db":{"uri":"dashboard","methods":["GET","HEAD"]},"db.profile":{"uri":"dashboard\/profile","methods":["GET","HEAD"]},"db.settings":{"uri":"dashboard\/settings","methods":["GET","HEAD"]},"db.logs":{"uri":"dashboard\/logs","methods":["GET","HEAD"]},"db.admin.users.users":{"uri":"dashboard\/admin\/users\/users","methods":["GET","HEAD"]},"db.admin.users.roles":{"uri":"dashboard\/admin\/users\/roles","methods":["GET","HEAD"]},"db.dev.tools.db_backup":{"uri":"dashboard\/dev\/tools\/db_backup","methods":["GET","HEAD"]},"db.dev.examples.ex1":{"uri":"dashboard\/dev\/examples\/ex1","methods":["GET","HEAD"]},"db.dev.examples.ex2":{"uri":"dashboard\/dev\/examples\/ex2","methods":["GET","HEAD"]},"db.dev.examples.ex3":{"uri":"dashboard\/dev\/examples\/ex3","methods":["GET","HEAD"]},"db.dev.examples.ex4":{"uri":"dashboard\/dev\/examples\/ex4","methods":["GET","HEAD"]},"db.dev.examples.ex5":{"uri":"dashboard\/dev\/examples\/ex5","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
