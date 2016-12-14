var storageManager = {
    getStorageData: function (key) {

        return sessionStorage.getItem(key);
    },
    removeStorageData: function(key){

        sessionStorage.removeItem(key);
    },
    setStorageData: function (key, val) {

        sessionStorage.setItem(key, val);
    },
    getProductStorageData: function (key) {

        return sessionStorage.productData;
    },
    setProductStorageData: function (val) {

        sessionStorage.productData = val;
    },
    setLocalStorageData: function (key, val) {
        localStorage.setItem(key, val);

    },

    getLocalStorageData: function (key) {

        return localStorage.getItem(key);

    },

    removeLocalStorageData: function (key) {

        localStorage.removeItem(key);

    }
};

module.exports = storageManager;
