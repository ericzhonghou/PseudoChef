// $(document).ready(function(){
//     var next = 1;
//     $(".add-more").click(function(e){
//         e.preventDefault();
//         var addto = "#field" + next;
//         var addRemove = "#field" + (next);
//         next = next + 1;
//         var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
//         var newInput = $(newIn);
//         var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me btn-7 btn-7d btn-icon-only icon-remove" >Empty</button></div><div id="field">';
//         var removeButton = $(removeBtn);
//         $(addto).after(newInput);
//         $(addRemove).after(removeButton);
//         $("#field" + next).attr('data-source',$(addto).attr('data-source'));
//         $("#count").val(next);  
        
//             $('.remove-me').click(function(e){
//                 e.preventDefault();
//                 var fieldNum = this.id.charAt(this.id.length-1);
//                 var fieldID = "#field" + fieldNum;
//                 $(this).remove();
//                 $(fieldID).remove();
//             });
//     });
    

    
// });

angular.module('sudo', [
  'ngAnimate'
]).

controller('IngredientsController', 
    function($scope) {
        $scope.foods=[];
        $scope.prev=false;
        this.addFood=function(){
            if($scope.newFood) {
                $scope.foods.push($scope.newFood);
                $scope.newFood = "";
            } else {
                alert("Enter an ingredient!");

            }
        };

        this.removeFood=function(item){
            for(var i = $scope.foods.length; i--;) {
                if($scope.foods[i] === item) {
                    $scope.foods.splice(i, 1);
                }
            }
        }; 

        this.myFunct=function(keyEvent) {
            if (keyEvent.which === 13) {
                this.addFood();
            }
            
        }
    });


// function IngredientsController($scope, $filter){
//     $scope.foods=[];
//     $scope.addFood=function(){
//         $scope.foods.push($scope.newFood);
//         $scope.newFood = "";
//     }
//     $scope.removeFood=function(item){
//         for(var i = $scope.foods.length; i--;) {
//             if($scope.foods[i] === item) {
//                 $scope.foods.splice(i, 1);
//                 break;
//             }
//         }
//     }
//     $scope.setfocus = function(){
//         return{
//             $scope: {setFocus: '='},
//             link: function(scope, element){
//                 if(scope.setFocus)  {
//                     element[0].focus();             
//                 }
//             }
//         }
//     }

// }




