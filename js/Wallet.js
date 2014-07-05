   var AssetWallet = Backbone.Model.extend({
        defaults: {
            name: "Add a Name",
            short_name: "Add a short Name",
            balance:0.00,
            current_address:"No Address"

        },
        initialize: function(){
            console.log("Wallet Initialized");
        }
    });

    var WalletEngine = Backbone.Collection.extend({
        model: AssetWallet
    });

   //small test
    var assetwallet1 = new AssetWallet({ name: "House", short_name: "Windsor",balance:2.00000000, current_address:"1XsdafcaDF2blash"});
    var assetwallet2 = new AssetWallet({ name: "McDonalds share", short_name: "MC",balance:0.00000001,current_address:"1Xwsdafasfafasfa" });
      var assetwallet3 = new AssetWallet();
    var WalletEngine1 = new WalletEngine([assetwallet1, assetwallet2,assetwallet3]);
    console.log( WalletEngine1.models); 