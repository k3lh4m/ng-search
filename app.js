angular.module('heroApp', [])
    .factory('_', ['$window',
        function($window) {
            // place lodash include before angular
            return $window._;
        }
    ])
    .controller('MainCtrl', function MainCtrl() {

    var $ctrl = this;
    $ctrl.jsonData = [
        {
          "_id": "59a866a43af9cfc20f3020b7",
          "index": 0,
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "name": "Roslyn Ingram",
          "gender": "female",
          "company": "SCHOOLIO",
          "email": "roslyningram@schoolio.com",
          "phone": "+1 (894) 449-3442",
          "about": "Pariatur minim commodo voluptate mollit enim consequat mollit anim mollit amet eiusmod amet esse in. Exercitation nostrud consectetur occaecat qui nostrud do. Cupidatat proident id velit laboris anim nostrud fugiat mollit labore tempor velit. Excepteur sunt fugiat mollit qui labore qui commodo commodo sit. Et eiusmod esse velit minim non enim nostrud.\r\n"
        },
        {
          "_id": "59a866a48fb0054901bd7364",
          "index": 1,
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "name": "Francesca Rodriquez",
          "gender": "female",
          "company": "LIMOZEN",
          "email": "francescarodriquez@limozen.com",
          "phone": "+1 (866) 469-3355",
          "about": "Elit aute non aliqua consequat incididunt aute reprehenderit laborum incididunt id. Consectetur do cillum minim nulla non laborum. Duis dolor reprehenderit dolore est cupidatat proident reprehenderit ea veniam ea. Deserunt in esse nisi eu. Dolore ea duis nulla reprehenderit non qui. Cupidatat non eu proident aliqua deserunt tempor.\r\n"
        },
        {
          "_id": "59a866a4d12cd9330da98d7a",
          "index": 2,
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "name": "Christian Obrien",
          "gender": "male",
          "company": "ELECTONIC",
          "email": "christianobrien@electonic.com",
          "phone": "+1 (931) 514-3548",
          "about": "Dolore cupidatat officia sit sint irure duis nulla minim irure dolor proident mollit culpa. Cillum incididunt commodo nisi ut labore pariatur. Labore consequat dolor ad minim irure.\r\n"
        },
        {
          "_id": "59a866a4b5eecee7dbaae93e",
          "index": 3,
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "name": "Jackie Fischer",
          "gender": "female",
          "company": "ENDIPINE",
          "email": "jackiefischer@endipine.com",
          "phone": "+1 (939) 500-2799",
          "about": "Voluptate aute elit aute aute do aliquip dolor excepteur adipisicing aliquip labore. Aute fugiat officia pariatur sit non. Mollit consectetur magna labore sunt pariatur pariatur qui ut ad labore duis.\r\n"
        },
        {
          "_id": "59a866a46fd80a46f217925e",
          "index": 4,
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Meredith Benson",
          "gender": "female",
          "company": "RETROTEX",
          "email": "meredithbenson@retrotex.com",
          "phone": "+1 (887) 411-2215",
          "about": "Laboris do commodo proident minim incididunt quis aliqua excepteur laborum esse. Elit Lorem nulla commodo veniam nisi commodo. In labore cillum sunt non.\r\n"
        },
        {
          "_id": "59a866a47cb969b30bfc9ac8",
          "index": 5,
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "name": "Sweeney Mcleod",
          "gender": "male",
          "company": "INVENTURE",
          "email": "sweeneymcleod@inventure.com",
          "phone": "+1 (867) 600-3513",
          "about": "Fugiat ut est cupidatat occaecat eiusmod veniam laboris sint in amet reprehenderit fugiat. Incididunt officia occaecat sunt aliqua sunt. Sit sint incididunt sit anim labore duis aliquip elit velit qui reprehenderit reprehenderit. Sit exercitation laborum anim laborum deserunt id veniam voluptate ullamco incididunt minim reprehenderit aliquip. Est aliquip cupidatat dolore eu incididunt dolore minim et culpa cillum sit culpa fugiat labore. In eiusmod laborum irure occaecat voluptate ipsum deserunt tempor proident ut eiusmod esse pariatur ut. Commodo laborum sunt nostrud aliqua qui exercitation non pariatur sit.\r\n"
        },
        {
          "_id": "59a866a472cfddd5c0ed8d37",
          "index": 6,
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Sam Bentley",
          "gender": "male",
          "company": "VIAGRAND",
          "email": "ingrampatton@viagrand.com",
          "phone": "+1 (847) 514-3030",
          "about": "In ullamco minim fugiat ut. Qui nisi enim eiusmod pariatur officia consectetur adipisicing et tempor ea incididunt laboris. Nostrud laborum ipsum do officia aute irure ex anim nulla duis ut exercitation. Cillum Lorem ex minim anim magna duis.\r\n"
        },
        {
          "_id": "59a866a472cfddd5c0ed8d37",
          "index": 7,
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Sam Houghton",
          "gender": "male",
          "company": "VIAGRAND",
          "email": "ingrampatton@viagrand.com",
          "phone": "+1 (847) 514-3030",
          "about": "In ullamco minim fugiat ut. Qui nisi enim eiusmod pariatur officia consectetur adipisicing et tempor ea incididunt laboris. Nostrud laborum ipsum do officia aute irure ex anim nulla duis ut exercitation. Cillum Lorem ex minim anim magna duis.\r\n"
        },
        {
          "_id": "59a866a472cfddd5c0ed8d37",
          "index": 8,
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Sam Kelham",
          "gender": "male",
          "company": "VIAGRAND",
          "email": "ingrampatton@viagrand.com",
          "phone": "+1 (847) 514-3030",
          "about": "In ullamco minim fugiat ut. Qui nisi enim eiusmod pariatur officia consectetur adipisicing et tempor ea incididunt laboris. Nostrud laborum ipsum do officia aute irure ex anim nulla duis ut exercitation. Cillum Lorem ex minim anim magna duis.\r\n"
        }
      ]

  });