class Pair {


    constructor(cards){

        this.cards = cards;
    }

    getValue(){

        if(Pair.isAPair(cards)){

            return 2*Combo.getTotalValue(cards);

        }

    }

    static checkCombo(cards){

        let res = false;

        res = Pair.isAPair(cards);

        return res;

    }

    static isAPair(cards) {

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
    
            if(arrValue[key] >= 2){
                
                res = true;
                
            }
    
        }
        
        return res;
    
    }

  }