function FindProxyForURL(url, host) {
    // Exclude web.archive.org from using the proxy
    if (shExpMatch(host, "web.archive.org")) {
        return "DIRECT";
    }

    // Define the proxy for other requests
    return "PROXY theoldnet.com:2012";
}
