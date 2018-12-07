/*
 * A simple Node.js app that calls Marketing Cloud REST APIs
 * 
 */

import Constants from './Constants'
import Utils from './Utils';
import {SfmcApi} from './SfmcApi';

class App {

  constructor()
  {
  }

  public async runDemo() : Promise<boolean>
  {
    Utils.logInfo("** Demo: Node.js app calling Marketing Cloud REST APIs **");

    Utils.logInfo("Connecting to Marketing Cloud...");
    let success = await SfmcApi.connectToMarketingCloud();
    if(success)
    {
      Utils.logInfo(Constants.txtConnectSuccess);
      return true;
    }
    else
    {
      Utils.logError(Constants.txtConnectError);
      return false;
    }
  }
}

export default new App().runDemo();