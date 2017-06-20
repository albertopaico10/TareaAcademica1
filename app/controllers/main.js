app.controller('MainCtrl', ['$scope', '$window', function($scope,$window) {
    $scope.title = 'Tarea Academica #1';
    $scope.name = 'Hola esta es la primera tarea academica';
    $scope.main_page = true;
    $scope.about_page = true;
    $scope.service_page = true;
    $scope.register_page = true;
    $scope.login_page = true;
    $scope.welcome_page = true;
    $scope.master = {};
    var array_json=[];

    $scope.home_page = function() {
      console.log("Home");
      $scope.main_page = true; // Visible True
      $scope.about_page = true;
      $scope.service_page = true;
      $scope.register_page = true;
      $scope.login_page = true;
      $scope.welcome_page = true;
      $scope.title = 'Tarea Academica #1';
      $scope.name = 'Esta es la pagina principal...!!';
    };

    $scope.about_div = function() {
      console.log("About");
      $scope.main_page = false;
      $scope.about_page = false;// Visible true
      $scope.service_page = true;
      $scope.register_page = true;
      $scope.login_page = true;
      $scope.welcome_page = true;
      $scope.title = 'Acerca';
      $scope.name = 'Esta es la pagina acerca de mi...!!';
    };

    $scope.service_div = function() {
      console.log("Servicios");
      $scope.main_page = false;
      $scope.about_page = true;
      $scope.service_page = false; // Visible true
      $scope.register_page = true;
      $scope.login_page = true;
      $scope.welcome_page = true;
      $scope.title = 'Servicios';
      $scope.name = 'Esta es la pagina de servicios...!!';
    };

    $scope.register_div = function() {
      console.log("Servicios");
      $scope.main_page = false;
      $scope.about_page = true;
      $scope.service_page = true;
      $scope.register_page = false; // Visible true
      $scope.login_page = true;
      $scope.welcome_page = true;
      $scope.title = 'Registro';
      $scope.name = 'Esta es la pagina de registros...!!';
    };

    $scope.login_div = function() {
      console.log("Servicios");
      $scope.main_page = false;
      $scope.about_page = true;
      $scope.service_page = true;
      $scope.register_page = true;
      $scope.login_page = false; // Visible true
      $scope.welcome_page = true;
      $scope.title = 'Login';
      $scope.name = 'Esta es la pagina del Login...!!';
    };

    $scope.save_register = function(bean_user) {
      console.log("Grabar registro : "+bean_user.name+"**"+bean_user.email);
      if(!$scope.validate_email(bean_user.email)){
        var temp_bean_user = JSON.stringify(bean_user);
        array_json.push(temp_bean_user);
        console.log("after push");
        console.log("Array Json : "+array_json.length);
        $window.alert("Se registro correctamente =)");
      }
    };

    $scope.validation_login = function(user) {
      console.log("Validar registro : "+user.email+"**"+user.password);
      console.log("Cantidad de registros : "+array_json.length);
      if(array_json.length == 0){
         $window.alert("Se necesita registrar algunos usuarios");
      }else{
        for(var i=0;i<array_json.length;i++){
          var getUser=JSON.parse(array_json[i]);
          console.log("datos : "+getUser.name);
          if(getUser.email == user.email && getUser.password == user.password){
            console.log("Bienvenido : "+getUser.name);
            $scope.welcome_div(getUser.name);
            break;
          }
        }
      }
    };

    $scope.validate_email = function(email){
      var validation = false;
      for(var i=0;i<array_json.length;i++){
        var getUser=JSON.parse(array_json[i]);
        console.log("datos : "+getUser.name);
        if(getUser.email == email){
          console.log("Usuario : "+getUser.name);
          $window.alert("Este correo se encuentra registrado. Por favor ingrese otro");
          validation = true;
          return validation;
        }
      }
    };

    $scope.welcome_div = function(name) {
      console.log("Servicios");
      $scope.main_page = false;
      $scope.about_page = true;
      $scope.service_page = true;
      $scope.register_page = true;
      $scope.login_page = true;
      $scope.welcome_page = false;// Visible true
      $scope.title = 'Bienvenido =)';
      $scope.name = name;
    };

}])
