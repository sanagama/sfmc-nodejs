
export default class Constants
{
    // HTTP 500 = internal server error
    public static Success = "success";
    public static Error = "error";
    public static Http500 = 500;

    // SFMC REST API URLs
    public static SfmcApiBaseUrl = "https://www.exacttargetapis.com";
    public static SfmcApiAuthServiceUrl = "https://auth.exacttargetapis.com/v1/requestToken";
    public static SfmcMetricTestUrl = Constants.SfmcApiBaseUrl + "/platform-internal/v1/data/metrics/MOBILE_CONNECT_SEND_COUNTS/datasets/TotalCount";
    public static SfmcApiContactsUrl = Constants.SfmcApiBaseUrl + "/contacts/v1/contacts";

    // Strings
    public static txtConnectSuccess = "Connected successfully!";
    public static txtConnectError = "There was an error connecting to Marketing Cloud";
}