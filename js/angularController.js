var app = angular.module('mainApp' , ['ngRoute']);

app.config(function($routeProvider){
 $routeProvider
 .when('/', {
  templateUrl: 'home.html'
 })
 .when('/shares', {
  templateUrl: 'shares.html'
 })
 .when('/about', {
  templateUrl: 'about.html'
 })
 .when('/regions', {
  templateUrl: 'regions.html'
 })
  .when('/whatdo', {
  templateUrl: 'whatdo.html'
 })
 .when('/admin', {
  templateUrl: 'admin.html'
 })
 .when('/haberekle', {
  templateUrl: 'haberekle.html'
 })
 .when('/habersil', {
  templateUrl: 'habersil.html'
 })
 .when('/haberduzenle', {
  templateUrl: 'haberduzenle.html'
 })
 .when('/haberlistele', {
  templateUrl: 'haberlistele.html'
 })
 .when('/newsContent/:haberId', {
  templateUrl: 'newsContent.html'
 })
 .when('/kullaniciekle', {
  templateUrl: 'kullaniciekle.html'
 })
 .when('/kullanicisil', {
  templateUrl: 'kullanicisil.html'
 })
 .when('/kullaniciduzenle', {
  templateUrl: 'kullaniciduzenle.html'
 })
 .when('/kullanicilistele', {
  templateUrl: 'kullanicilistele.html'
 })
 .when('/login', {
  templateUrl: 'login.html'
 })
 .otherwise({
  redirectTo: '/'
 });
});
app.controller('home', function($scope, $http) {
    $http.get("slider.txt")
    .then(function(response) {
        $scope.resimler = response.data;
		
    });
	    $http.get("news.txt")
    .then(function(response) {
        $scope.haberler = response.data;
		
    });
	
});
app.controller('shares', function($scope, $http) {
    $http.get("welcome.txt")
    .then(function(response) {
        $scope.resimler = response.data;
		
    });
});
app.controller('about', function($scope, $http) {
 
    });
	app.controller('admin', function($scope, $http) {
 
    });
	app.controller('haberekle', function($scope, $http) {
 
    });
	app.controller('habersil', function($scope, $http) {
 
    });
	app.controller('haberduzenle', function($scope, $http) {
 
    });
	app.controller('kullaniciekle', function($scope, $http) {
 
    });
   app.controller('kullanicisil', function($scope, $http) {
 
    });
	app.controller('kullaniciduzenle', function($scope, $http) {
 
    });
    app.controller('deneme', function ($location, $scope) {
    $scope.indir = function (hash) {
        $location.hash(hash);
    };
})
	app.controller('login', function($scope, $http,$location) {
		$scope.formsubmit=function(){
			console.log($scope.userName);
			if($scope.userName=="admin" && $scope.password=="123")
            {
                alert("Giriş Başarılı");
                 $location.path('/admin');
            }
            else
             alert(" Başarısız");
             $location.path('/');
		}
    });
app.controller('haberlistele', function($scope, $http) {
    $http.get("news.txt")
    .then(function(response) {
        $scope.haberler = response.data;
    });
    $scope.sirala="haberId";
    $scope.idsirala = function() {
       $scope.sirala="haberId";
    };
    $scope.basliksirala = function() {
        $scope.sirala="haberBaslik";
     };
     $scope.iceriksirala = function() {
        $scope.sirala="haberIcerik";
     };
});
app.controller('kullanicilistele', function($scope, $http) {
    $http.get("user.txt")
    .then(function(response) {
        $scope.kullanicilar = response.data;
    });
    $scope.sirala="userId";
    $scope.idsirala = function() {
       $scope.sirala="userId";
    };
    $scope.nameSirala = function() {
        $scope.sirala="userName";
     };
     $scope.passwordSirala = function() {
        $scope.sirala="userPassword";
     };
});
app.controller('regions', function($scope, $http) {
    $http.get("regions.txt")
    .then(function(response) {
        $scope.bolgeler = response.data;
		
    });
});
app.controller('whatdo', function($scope, $http) {
  $http.get("whatdo.txt")
    .then(function(response) {
        $scope.yapilacaklar = response.data;
		
       });
 });
 
app.controller('newsContent', function($scope,$routeParams, $http) {
	$http.get("news.txt")
    .then(function(response) {    
        $scope.haberler = response.data;
        $scope.check=true;
        for(var i=0;i<$scope.haberler.length;i++)
        {
            if($scope.haberler[i].haberId==$routeParams.haberId)
            {
                $scope.haberNesne=$scope.haberler[i];
                $scope.check=true;
                break;
            }
          else
          {
              $scope.check=false;
          }
        }
        if($scope.check==false)
        {
            $location.path('/');
        }
    });
    });

