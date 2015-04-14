'use strict';

module.exports = {
  getListOfBoards:        require('./boards/server.controllers.boards.get-list-of-boards'),
  getBoard:               require('./boards/server.controllers.boards.get-board'),
  getCreateBoardForm:     require('./boards/server.controllers.boards.get-create-board-form'),
  submitCreateBoardForm:  require('./boards/server.controllers.boards.submit-create-board-form')
};
