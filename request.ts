// @ts-nocheck

/** This Fetch API interface represents a resource request. */
interface Request extends Body {
    readonly cache: RequestCache
    readonly credentials: RequestCredentials
    readonly destination: RequestDestination
    readonly headers: Headers
    readonly integrity: string
    readonly keepalive: boolean
    readonly method: string
    readonly mode: RequestMode
    readonly redirect: RequestRedirect
    readonly referrer: string
    readonly referrerPolicy: ReferrerPolicy
    readonly url: string
}

pipe(
    Request.default,
    addBasicAuth(credentials),
    noCache(),
    customHeader("X-SOCRATES"),
)

/*  F# with |> (pipe operator)

Request.default
  |> addBasicAuth(credentials)
  |> noCache()
  |> customHeader("X-SOCRATES")

*/
