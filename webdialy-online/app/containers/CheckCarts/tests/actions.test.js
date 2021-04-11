import * as actions from '../actions';
import * as constants from '../constants';

describe('CheckCarts actions', () => {
  describe('initState Action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('changePage Action', () => {
    it('has a type of CHANGE_PAGE', () => {
      const expected = {
        type: constants.CHANGE_PAGE,
        payload: 'newPage',
      };
      expect(actions.changePage('newPage')).toEqual(expected);
    });
  });
  describe('initLoad Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
        payload: 'newPage',
      };
      expect(actions.initLoad('newPage')).toEqual(expected);
    });
  });
  describe('initLoadSuccess Action', () => {
    it('has a type of INIT_LOAD_SUCCESS', () => {
      const expected = {
        type: constants.INIT_LOAD_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.initLoadSuccess('newPage')).toEqual(expected);
    });
  });
  describe('initLoadError Action', () => {
    it('has a type of INIT_LOAD_ERROR', () => {
      const expected = {
        type: constants.INIT_LOAD_ERROR,
        payload: 'newPage',
      };
      expect(actions.initLoadError('newPage')).toEqual(expected);
    });
  });
  describe('loadEdit Action', () => {
    it('has a type of LOAD_EDIT', () => {
      const expected = {
        type: constants.LOAD_EDIT,
        payload: 'newPage',
      };
      expect(actions.loadEdit('newPage')).toEqual(expected);
    });
  });
  describe('loadEditSuccess Action', () => {
    it('has a type of LOAD_EDIT_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_EDIT_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.loadEditSuccess('newPage')).toEqual(expected);
    });
  });
  describe('loadEditError Action', () => {
    it('has a type of LOAD_EDIT_ERROR', () => {
      const expected = {
        type: constants.LOAD_EDIT_ERROR,
        payload: 'newPage',
      };
      expect(actions.loadEditError('newPage')).toEqual(expected);
    });
  });
  describe('loadView Action', () => {
    it('has a type of LOAD_VIEW', () => {
      const expected = {
        type: constants.LOAD_VIEW,
        payload: 'newPage',
      };
      expect(actions.loadView('newPage')).toEqual(expected);
    });
  });
  describe('loadViewSuccess Action', () => {
    it('has a type of LOAD_VIEW_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_VIEW_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.loadViewSuccess('newPage')).toEqual(expected);
    });
  });
  describe('loadViewError Action', () => {
    it('has a type of LOAD_VIEW_ERROR', () => {
      const expected = {
        type: constants.LOAD_VIEW_ERROR,
        payload: 'newPage',
      };
      expect(actions.loadViewError('newPage')).toEqual(expected);
    });
  });
  describe('createItem Action', () => {
    it('has a type of CREATE_ITEM', () => {
      const expected = {
        type: constants.CREATE_ITEM,
        payload: 'newPage',
      };
      expect(actions.createItem('newPage')).toEqual(expected);
    });
  });
  describe('createItemSuccess Action', () => {
    it('has a type of CREATE_ITEM_SUCCESS', () => {
      const expected = {
        type: constants.CREATE_ITEM_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.createItemSuccess('newPage')).toEqual(expected);
    });
  });
  describe('createItemError Action', () => {
    it('has a type of CREATE_ITEM_ERROR', () => {
      const expected = {
        type: constants.CREATE_ITEM_ERROR,
        payload: 'newPage',
      };
      expect(actions.createItemError('newPage')).toEqual(expected);
    });
  });
  describe('updateItem Action', () => {
    it('has a type of UPDATE_ITEM', () => {
      const expected = {
        type: constants.UPDATE_ITEM,
        payload: 'newPage',
      };
      expect(actions.updateItem('newPage')).toEqual(expected);
    });
  });
  describe('updateItemSuccess Action', () => {
    it('has a type of UPDATE_ITEM_SUCCESS', () => {
      const expected = {
        type: constants.UPDATE_ITEM_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.updateItemSuccess('newPage')).toEqual(expected);
    });
  });
  describe('updateItemError Action', () => {
    it('has a type of UPDATE_ITEM_ERROR', () => {
      const expected = {
        type: constants.UPDATE_ITEM_ERROR,
        payload: 'newPage',
      };
      expect(actions.updateItemError('newPage')).toEqual(expected);
    });
  });
  describe('deleteItem Action', () => {
    it('has a type of DELETE_ITEM', () => {
      const expected = {
        type: constants.DELETE_ITEM,
        payload: 'newPage',
      };
      expect(actions.deleteItem('newPage')).toEqual(expected);
    });
  });
  describe('deleteItemSuccess Action', () => {
    it('has a type of DELETE_ITEM_SUCCESS', () => {
      const expected = {
        type: constants.DELETE_ITEM_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.deleteItemSuccess('newPage')).toEqual(expected);
    });
  });
  describe('deleteItemError Action', () => {
    it('has a type of DELETE_ITEM_ERROR', () => {
      const expected = {
        type: constants.DELETE_ITEM_ERROR,
        payload: 'newPage',
      };
      expect(actions.deleteItemError('newPage')).toEqual(expected);
    });
  });
  describe('search Action', () => {
    it('has a type of SEARCH', () => {
      const expected = {
        type: constants.SEARCH,
        payload: 'newPage',
      };
      expect(actions.search('newPage')).toEqual(expected);
    });
  });
  describe('searchSuccess Action', () => {
    it('has a type of SEARCH_SUCCESS', () => {
      const expected = {
        type: constants.SEARCH_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.searchSuccess('newPage')).toEqual(expected);
    });
  });
  describe('searchError Action', () => {
    it('has a type of SEARCH_ERROR', () => {
      const expected = {
        type: constants.SEARCH_ERROR,
        payload: 'newPage',
      };
      expect(actions.searchError('newPage')).toEqual(expected);
    });
  });
  describe('updateShoppingStep Action', () => {
    it('has a type of UPDATE_SHOPPING_STEP', () => {
      const expected = {
        type: constants.UPDATE_SHOPPING_STEP,
        payload: 'newPage',
      };
      expect(actions.updateShoppingStep('newPage')).toEqual(expected);
    });
  });
  describe('updateShoppingStepSuccess Action', () => {
    it('has a type of UPDATE_SHOPPING_STEP_SUCCESS', () => {
      const expected = {
        type: constants.UPDATE_SHOPPING_STEP_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.updateShoppingStepSuccess('newPage')).toEqual(expected);
    });
  });
  describe('updateShoppingStepError Action', () => {
    it('has a type of UPDATE_SHOPPING_STEP_ERROR', () => {
      const expected = {
        type: constants.UPDATE_SHOPPING_STEP_ERROR,
        payload: 'newPage',
      };
      expect(actions.updateShoppingStepError('newPage')).toEqual(expected);
    });
  });
  describe('loadViewOrder Action', () => {
    it('has a type of LOAD_VIEW_ORDER', () => {
      const expected = {
        type: constants.LOAD_VIEW_ORDER,
        payload: 'newPage',
      };
      expect(actions.loadViewOrder('newPage')).toEqual(expected);
    });
  });
  describe('loadViewOrderSuccess Action', () => {
    it('has a type of LOAD_VIEW_ORDER_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_VIEW_ORDER_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.loadViewOrderSuccess('newPage')).toEqual(expected);
    });
  });
  describe('loadViewOrderError Action', () => {
    it('has a type of LOAD_VIEW_ORDER_ERROR', () => {
      const expected = {
        type: constants.LOAD_VIEW_ORDER_ERROR,
        payload: 'newPage',
      };
      expect(actions.loadViewOrderError('newPage')).toEqual(expected);
    });
  });
});
