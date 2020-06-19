class Brelan {

    constructor(cards){

        this.cards = cards;
    }

    getValue(){

        if(Pair.isAPair(cards)){

            return 3*Combo.getTotalValue(cards);

        }

    }

    static checkCombo(cards){

        let res = false;

        res = Brelan.isABrelan(cards);

        return res;

    }

    static isABrelan(cards) {

        var res = false;
    
          var arrValue = {};
      
        for (let i = 0; i < cards.length; i++) {
            
            var card = cards[i];
            
            var value = card.charAt(0);
            
            if(isNaN(arrValue[value])){
                
                arrValue[value] = 0;
                
            }
            
            arrValue[value] = arrValue[value] + 1;
            
        }
    
        for (var key in arrValue) {
    
            if(arrValue[key] >= 3){
                
                res = true;
                
            }
    
        }
        
        return res;
    
    }

  }