describe('tokenStorage test', function() {
    var windowMock;
    
    beforeEach(module('app'));
    beforeEach(function() {
        windowMock = {
            localStorage: {
                obj: [],
                getItem: function(name){
                    return windowMock.localStorage.obj[name];
                },
                setItem: function(name, json) {
                    windowMock.localStorage.obj[name] = json;
                }
            }
        };
        
        module(function ($provide) {
            $provide.value('$window', windowMock);
        });
    });
    
    it('getToken method', inject(function (tokenStorage) {
        var expected = {token: '123asd'};
        expect(tokenStorage.getToken()).toBeUndefined();
        
        tokenStorage.setToken(expected);
        expect(tokenStorage.getToken()).toEqual(expected);
        
        tokenStorage.clearToken();
        expect(tokenStorage.getToken()).toBeUndefined();
        
        expect(tokenStorage.getAccessHeader()).toBe('');
    
        tokenStorage.setToken(expected);
        expect(tokenStorage.getAccessHeader()).toBe(expected.token);
    
    }));
    
    
});