export { default as LinkedIn } from './LinkedIn'
const mainColor = '#ffffff'
const secondaryColor = '#ffffff'
const invertMainColor = '#EE3D7F'
const invertSecondaryColor = '#808285'
export const IconVoluntary = {
  name: 'IconVoluntary',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-voluntary"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-612.000000, -2239.000000)"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g id="voluntary" transform="translate(430.000000, 0.000000)">
                  <g
                    id="voluntary-workers-icon"
                    transform="translate(25.000000, 0.000000)"
                  >
                    <circle
                      id="Oval-3"
                      stroke={main}
                      stroke-width="2"
                      cx="65"
                      cy="65"
                      r="65"
                    />
                    <g
                      id="Page-1"
                      transform="translate(29.000000, 31.000000)"
                      fill={main}
                    >
                      <g
                        id="Group-3"
                        transform="translate(21.000000, 0.200620)"
                      >
                        <path
                          d="M18.34434,11.96232 C17.65834,11.96232 17.10254,11.40652 17.10254,10.72192 L17.10254,6.08092 C17.10254,4.20632 15.57794,2.68172 13.70474,2.68172 L6.74394,2.68172 C4.87074,2.68172 3.34474,4.20632 3.34474,6.08092 L3.34474,10.72192 C3.34474,11.40652 2.78894,11.96232 2.10434,11.96232 C1.41834,11.96232 0.86254,11.40652 0.86254,10.72192 L0.86254,6.08092 C0.86254,2.83712 3.50154,0.19952 6.74394,0.19952 L13.70474,0.19952 C16.94714,0.19952 19.58614,2.83712 19.58614,6.08092 L19.58614,10.72192 C19.58614,11.40652 19.03034,11.96232 18.34434,11.96232"
                          id="Fill-1"
                        />
                      </g>
                      <g
                        id="Group-6"
                        transform="translate(0.000000, 10.000620)"
                      >
                        <path
                          d="M16.41066,43.79384 L8.91226,43.79384 C3.99826,43.79384 -0.00014,39.79544 -0.00014,34.88144 L-0.00014,9.30904 C-0.00014,4.39504 3.99826,0.39524 8.91226,0.39524 L52.38506,0.39524 C55.15986,0.39524 57.82126,1.72944 59.50546,3.96244 C59.91706,4.50984 59.80786,5.28824 59.26186,5.69984 C58.71306,6.11284 57.93326,6.00364 57.52306,5.45764 C56.30506,3.84204 54.38566,2.87884 52.38506,2.87884 L8.91226,2.87884 C5.36606,2.87884 2.48206,5.76284 2.48206,9.30904 L2.48206,34.88144 C2.48206,38.42764 5.36606,41.31164 8.91226,41.31164 L16.41066,41.31164 C17.09666,41.31164 17.65246,41.86744 17.65246,42.55204 C17.65246,43.23804 17.09666,43.79384 16.41066,43.79384"
                          id="Fill-4"
                        />
                      </g>
                      <g
                        id="Group-9"
                        transform="translate(19.600000, 21.600620)"
                        fill={secondary}
                      >
                        <path
                          d="M26.51628,46.19972 C26.31048,46.19972 26.10608,46.14932 25.91848,46.04712 C25.66088,45.90572 19.53588,42.52052 13.31288,37.06752 C4.81348,29.62092 0.50428,22.24572 0.50428,15.14632 C0.50428,6.17932 6.65028,1.60132 12.74168,1.04132 C17.83068,0.56812 23.76248,2.86132 26.51628,8.73572 C29.31348,2.75772 35.40068,0.44072 40.63248,0.91812 C46.55308,1.46132 52.52828,5.71312 52.52828,13.98712 C52.52828,29.54532 28.22148,45.33872 27.18688,46.00232 C26.98388,46.13392 26.75008,46.19972 26.51628,46.19972 M14.02828,3.46472 C13.67128,3.46472 13.31708,3.48012 12.96848,3.51372 C8.36388,3.93652 2.98648,7.23772 2.98648,15.14632 C2.98648,29.02592 22.62708,41.24372 26.46728,43.49912 C30.25988,40.92872 50.04608,26.89652 50.04608,13.98712 C50.04608,6.81912 44.85208,3.79792 40.40568,3.38912 C35.23968,2.92012 29.09368,5.73972 27.73708,13.05612 C27.62788,13.64412 27.11408,14.07112 26.51628,14.07112 C25.91848,14.07112 25.40468,13.64412 25.29548,13.05612 C24.05228,6.34732 18.78128,3.46472 14.02828,3.46472"
                          id="Fill-7"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconJourney = {
  name: 'IconJourney',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-journey"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-830.000000, -2239.000000)"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g id="journey" transform="translate(649.000000, 0.000000)">
                  <g
                    id="journey-icon"
                    transform="translate(24.000000, 0.000000)"
                  >
                    <circle
                      id="Oval-3"
                      stroke={main}
                      stroke-width="2"
                      cx="65"
                      cy="65"
                      r="65"
                    />
                    <g
                      id="Page-1"
                      transform="translate(34.000000, 26.000000)"
                      fill={main}
                    >
                      <path
                        d="M50.17995,73.6295 C46.87845,73.6295 44.61645,71.2445 44.54595,67.682 C44.52795,66.7385 44.53245,65.795 44.53695,64.8215 L44.53695,64.82 L16.06695,64.82 L16.06695,64.871 C16.07445,65.8865 16.08045,66.872 16.05345,67.8575 C15.96195,71.315 13.70295,73.6295 10.42845,73.6295 L10.38495,73.6295 C7.10145,73.61 4.85445,71.258 4.79445,67.778 C4.77945,66.809 4.78245,65.84 4.78695,64.823 L4.78845,64.7135 L1.36395,64.7135 C0.61095,64.7135 0.00045,64.1075 0.00045,63.3605 L0.00045,55.9625 C-0.00105,49.025 -0.00105,42.089 0.00795,35.1515 C0.00945,33.926 0.06645,32.9285 0.18645,32.012 C0.49845,29.6405 0.82095,27.2705 1.14345,24.9005 C1.68045,20.963 2.23395,16.892 2.72445,12.8855 C3.16995,9.2405 4.97595,6.668 7.94595,5.447 C11.16045,4.1255 14.65995,2.9795 18.64545,1.9445 C20.63745,1.427 22.68345,1.1525 24.66195,0.887 C25.52745,0.77 26.39145,0.653 27.25095,0.5165 C27.32295,0.5045 27.39495,0.5 27.46695,0.5 L33.13695,0.5 C33.20895,0.5 33.28095,0.5045 33.35295,0.5165 C34.21845,0.6545 35.08545,0.785 35.95395,0.9155 C37.89645,1.2095 39.90645,1.514 41.87895,1.889 C46.30245,2.7305 49.93545,3.7055 53.29845,5.7275 C55.98495,7.3415 57.51795,9.698 57.85695,12.7325 C58.02795,14.2775 58.25295,15.854 58.47045,17.3765 C58.65345,18.6575 58.83495,19.9385 58.99245,21.2225 C59.14995,22.5125 59.32995,23.801 59.50995,25.091 C59.96445,28.361 60.43695,31.7405 60.52995,35.1125 C60.70395,41.321 60.66795,47.63 60.63195,53.729 C60.61695,56.297 60.60195,58.865 60.60195,61.4345 L60.60195,63.4145 C60.60195,64.1615 59.99145,64.7675 59.23845,64.7675 L55.81395,64.7675 L55.81395,64.853 C55.81695,65.813 55.81845,66.7055 55.80945,67.598 C55.77345,71.2415 53.58045,73.61 50.22495,73.6295 L50.17995,73.6295 Z M14.69745,62.1155 L45.90495,62.1155 C46.65795,62.1155 47.26845,62.7215 47.26845,63.4685 L47.26395,64.835 C47.25945,65.786 47.25495,66.707 47.27295,67.6295 C47.29245,68.6225 47.61495,70.925 50.17845,70.925 L50.20695,70.925 C52.68045,70.91 53.07045,68.8175 53.08245,67.5725 C53.09145,66.689 53.08845,65.807 53.08695,64.8605 L53.08545,63.4145 C53.08545,62.6675 53.69595,62.0615 54.44895,62.0615 L57.87495,62.0615 L57.87495,61.4345 C57.87495,58.8605 57.88995,56.2865 57.90495,53.7125 C57.94095,47.636 57.97695,41.351 57.80445,35.1875 C57.71445,31.964 57.25395,28.658 56.80845,25.4615 C56.62545,24.1565 56.44395,22.8515 56.28495,21.5465 C56.13045,20.282 55.95045,19.019 55.77045,17.756 C55.54995,16.2125 55.32195,14.6165 55.14495,13.031 C54.90195,10.8455 53.83545,9.212 51.88545,8.0405 C48.86895,6.227 45.49995,5.3315 41.36595,4.5455 C39.44295,4.1795 37.46145,3.8795 35.54445,3.59 C34.70595,3.464 33.86595,3.3365 33.02895,3.2045 L27.57345,3.2045 C26.72895,3.3365 25.87995,3.452 25.02945,3.5675 C23.04345,3.833 21.16695,4.0865 19.33695,4.562 C15.47295,5.564 12.08745,6.671 8.98995,7.946 C6.95445,8.7845 5.75595,10.5545 5.43195,13.211 C4.93845,17.2355 4.38345,21.317 3.84645,25.262 C3.52395,27.6275 3.20145,29.993 2.89095,32.3615 C2.78595,33.161 2.73645,34.049 2.73495,35.1545 C2.72595,42.0905 2.72595,49.0265 2.72745,55.9625 L2.72745,62.009 L6.15495,62.009 C6.90795,62.009 7.51845,62.6135 7.51845,63.3605 L7.51395,64.835 C7.50945,65.8325 7.50645,66.782 7.52295,67.733 C7.55745,69.7505 8.60595,70.913 10.40145,70.925 C12.18645,70.9595 13.27545,69.7625 13.32795,67.7855 C13.35345,66.83 13.34595,65.8745 13.33995,64.889 C13.33695,64.4225 13.33395,63.95 13.33395,63.4685 C13.33395,62.7215 13.94445,62.1155 14.69745,62.1155 Z"
                        id="Fill-1"
                      />
                      <path
                        d="M29.7396,36.3587 C22.1016,36.3587 14.5581,36.3557 11.3976,36.3497 C10.3026,36.3467 8.9316,36.2162 8.0451,35.2112 C7.1646,34.2122 7.2291,32.8457 7.3551,31.9067 C7.9746,27.2522 8.6601,22.5077 9.3906,17.8082 C9.8271,15.0032 11.0706,13.9607 13.9746,13.9562 C24.8631,13.9457 35.7516,13.9457 46.6401,13.9562 C49.5741,13.9607 50.7726,14.9672 51.2211,17.8022 C51.9516,22.4252 52.6341,27.1712 53.2461,31.9127 C53.3796,32.9462 53.4231,34.2587 52.5606,35.2322 C51.6876,36.2177 50.3106,36.3467 49.2066,36.3497 C46.0116,36.3557 37.8231,36.3587 29.7396,36.3587 M30.3081,16.6532 C24.8646,16.6532 19.4196,16.6562 13.9761,16.6622 C12.4206,16.6637 12.3156,16.7507 12.0861,18.2207 C11.3571,22.9007 10.6761,27.6242 10.0596,32.2607 C9.9306,33.2267 10.0956,33.4292 10.0986,33.4307 C10.1001,33.4322 10.2981,33.6422 11.4036,33.6452 C17.9061,33.6572 42.9891,33.6572 49.2021,33.6437 C50.3031,33.6422 50.5101,33.4487 50.5116,33.4472 C50.5131,33.4457 50.6676,33.2327 50.5401,32.2562 C49.9311,27.5402 49.2546,22.8197 48.5271,18.2222 C48.2901,16.7207 48.2196,16.6637 46.6371,16.6622 C41.1936,16.6562 35.7501,16.6532 30.3081,16.6532"
                        fill={secondary}
                        id="Fill-4"
                      />
                      <path
                        d="M12.27495,52.6997 L12.18195,52.6997 L12.18045,52.6997 C9.40845,52.6472 7.25445,50.4347 7.27845,47.6627 C7.29045,46.2737 7.81995,45.0107 8.76795,44.1047 C9.72495,43.1912 11.04645,42.7127 12.46395,42.7532 C15.24495,42.8372 17.37045,45.0722 17.30445,47.8412 C17.23845,50.5397 14.98995,52.6997 12.27495,52.6997 M12.23145,49.9937 C12.24495,49.9952 12.25845,49.9952 12.27195,49.9952 C13.49595,49.9952 14.54745,48.9872 14.57745,47.7767 C14.60745,46.4927 13.66395,45.4952 12.38145,45.4562 C11.70345,45.4337 11.08845,45.6437 10.65795,46.0547 C10.23645,46.4567 10.00995,47.0207 10.00545,47.6852 C9.99495,48.9767 10.95195,49.9697 12.23145,49.9937"
                        fill={secondary}
                        id="Fill-6"
                      />
                      <path
                        d="M48.327,52.69835 C45.6015,52.69835 43.3545,50.52185 43.299,47.81435 C43.2465,45.04385 45.3885,42.82085 48.1755,42.75335 C49.6065,42.72785 50.9145,43.20185 51.8625,44.11535 C52.803,45.02435 53.322,46.29335 53.3265,47.69285 C53.334,50.46485 51.168,52.66235 48.396,52.69835 L48.327,52.69835 Z M48.324,45.45635 C48.297,45.45635 48.2715,45.45635 48.243,45.45785 C46.956,45.48935 46.002,46.47935 46.0275,47.76185 C46.0515,48.97835 47.1015,49.99385 48.3285,49.99385 C48.339,49.99385 48.354,49.98935 48.3585,49.99385 C49.6395,49.97735 50.604,48.99185 50.5995,47.70035 C50.598,47.02535 50.3775,46.45685 49.9605,46.05485 C49.554,45.66335 48.99,45.45635 48.324,45.45635 Z"
                        fill={secondary}
                        id="Fill-8"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconPersonal = {
  name: 'IconPersonal',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-personal"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-394.000000, -2239.000000)"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g
                  id="individual-accident"
                  transform="translate(212.000000, 0.000000)"
                >
                  <g
                    id="individual-accident-Icon"
                    transform="translate(25.000000, 0.000000)"
                  >
                    <circle
                      id="Oval-3"
                      stroke={main}
                      stroke-width="2"
                      cx="65"
                      cy="65"
                      r="65"
                    />
                    <g
                      id="Group-7"
                      transform="translate(30.000000, 30.000000)"
                      fill={main}
                    >
                      <path
                        d="M44.0916053,62.1698113 L1.83301161,62.1698113 C1.53483998,62.1698113 1.24924944,62.0500854 1.03914538,61.8383597 C0.830299434,61.6266339 0.713295379,61.3392918 0.717069703,61.0418675 C0.720844028,60.6965529 0.818976461,52.5274671 2.33877107,47.9350344 C3.46855216,44.5184359 9.47224411,42.5335069 16.4258077,40.23477 C18.4790401,39.5567434 20.595178,38.856032 22.6295388,38.1036493 L22.6295388,31.7027257 C21.2380713,30.8381789 18.2261604,28.3075519 17.953151,22.4901344 C16.8208536,21.9167105 16.0949253,20.4321096 16.0949253,18.4963311 C16.0949253,16.6941416 16.7252374,15.2826365 17.7266915,14.6335962 C17.7128523,14.5882264 17.7002712,14.5415963 17.6876901,14.498747 C17.0309577,12.2277361 15.8080766,7.9995222 17.779532,5.85453856 C18.6123996,4.94588215 19.8415712,4.56023879 21.4544659,4.71651257 C23.0547794,1.521722 28.1689889,0.358490566 32.3521984,0.358490566 C36.9354863,0.358490566 42.6321998,1.75235185 43.6097499,5.68440178 C44.4690377,9.14889064 43.111539,12.5680097 42.3818363,14.4042266 C42.3730296,14.4256512 42.3642228,14.4470759 42.3554161,14.4697608 C43.3140944,15.1566092 43.9129539,16.5794568 43.9129539,18.3854272 C43.9129539,19.4075081 43.7078823,20.3779178 43.3354823,21.1202183 C43.0134066,21.7591764 42.575585,22.2242169 42.0572444,22.4888741 C41.7854931,28.3062916 38.7723241,30.8381789 37.3821147,31.7027257 L37.3821147,38.1023891 C39.748616,38.9770181 42.0496958,39.7382226 44.2828377,40.4780026 L43.9846661,41.5555355 L43.634912,42.6166848 L43.9846661,41.5555355 L43.5833296,42.599041 C41.1023404,41.7786037 38.5370579,40.9291801 35.873643,39.9234827 C35.4383376,39.7609076 35.1502309,39.3437574 35.1502309,38.8787169 L35.1502309,31.0398225 C35.1502309,30.5873847 35.4232403,30.1790564 35.8409322,30.0063991 C35.9956795,29.9396046 39.8467485,28.1890863 39.8467485,21.6318889 C39.8467485,21.0156157 40.3462174,20.5152875 40.9614323,20.5152875 C41.2155701,20.5152875 41.6823282,19.7061926 41.6823282,18.3854272 C41.6823282,17.0634014 41.2155701,16.2555668 40.9614323,16.2555668 C40.3462174,16.2555668 39.8467485,15.7539784 39.8467485,15.1377052 C39.8467485,14.7419796 40.0103025,14.3286103 40.3084741,13.5774879 C40.946335,11.9744214 42.1314728,8.99009632 41.4445458,6.22379837 C40.9211728,4.11914345 37.0990403,2.59295355 32.3521984,2.59295355 C27.6078727,2.59295355 23.7844821,4.11914345 23.2623672,6.22379837 C23.1176848,6.80352368 22.5439875,7.16270132 21.9589672,7.04927681 C21.0933888,6.87535921 19.9522848,6.78840042 19.420105,7.36686545 C18.3003888,8.58680915 19.3722969,12.2932703 19.8302483,13.8761725 C20.0680307,14.6991304 20.164905,15.0457053 20.164905,15.3607734 C20.164905,15.9783068 19.6654361,16.478635 19.0489631,16.478635 C18.7608564,16.478635 18.325551,17.2839491 18.325551,18.4963311 C18.325551,19.7099735 18.7608564,20.5152875 19.0489631,20.5152875 C19.6654361,20.5152875 20.164905,21.0156157 20.164905,21.6318889 C20.164905,28.2735245 24.1304618,29.9900155 24.1694632,30.0063991 C24.5871551,30.1790564 24.8601645,30.5873847 24.8601645,31.0398225 L24.8601645,38.8787169 C24.8601645,39.3424971 24.5733159,39.758387 24.1405267,39.9234827 C21.8444794,40.7981117 19.4452672,41.5908231 17.1253158,42.3570687 C11.2788874,44.2903266 5.23367786,46.2891186 4.45616704,48.6370062 C3.36287108,51.9427007 3.05840892,57.5483924 2.97663189,59.9353483 L44.0916053,59.9353483 C44.7068201,59.9353483 45.2075472,60.4356765 45.2075472,61.0519497 C45.2075472,61.6694832 44.7068201,62.1698113 44.0916053,62.1698113"
                        id="Fill-1"
                      />
                      <path
                        fill={secondary}
                        d="M56.7681389,68.6228935 C56.672637,68.6228935 56.5771351,68.6102946 56.4828898,68.5850968 C55.9940709,68.4553281 55.6535313,68.0118466 55.6535313,67.5053707 L55.6535313,53.6364967 L47.7997577,53.6364967 C47.4026709,53.6364967 47.0357426,53.4248351 46.8359426,53.0796251 C46.6373992,52.735675 46.634886,52.309832 46.8321728,51.964622 L58.7900143,30.9836665 C59.0425917,30.5439647 59.5565426,30.3323031 60.0441049,30.4582921 C60.5316672,30.5880609 60.8722068,31.0315423 60.8722068,31.5380183 L60.8722068,45.4081522 L68.7259804,45.4081522 C69.1243238,45.4081522 69.4912521,45.6198138 69.6910521,45.9637638 C69.8895955,46.3089738 69.8908521,46.7335569 69.6935653,47.0787669 L57.7357238,68.0597225 C57.5334106,68.4137517 57.1601992,68.6228935 56.7681389,68.6228935 Z M49.7198483,51.4027109 L56.7681389,51.4027109 C57.3838747,51.4027109 57.8827464,51.9028874 57.8827464,52.5189738 L57.8827464,63.2998564 L66.8071464,47.6419379 L59.7575992,47.6419379 C59.14312,47.6419379 58.6442483,47.1417614 58.6442483,46.5244151 L58.6442483,35.7447925 L49.7198483,51.4027109 Z"
                        id="Fill-6"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconGroupPersonal = {
  name: 'IconGroupPersonal',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-group"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-182.000000, -2239.000000)"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g id="group-personal-accident">
                  <g
                    id="group-personal-accident-Icon"
                    transform="translate(25.000000, 0.000000)"
                  >
                    <circle
                      id="Oval-3"
                      stroke={main}
                      stroke-width="2"
                      cx="65"
                      cy="65"
                      r="65"
                    />
                    <g
                      id="Group-7"
                      transform="translate(20.000000, 29.000000)"
                      fill={main}
                    >
                      <path
                        d="M64.0916053,63.1698113 L21.8330116,63.1698113 C21.53484,63.1698113 21.2492494,63.0500854 21.0391454,62.8383597 C20.8302994,62.6266339 20.7132954,62.3392918 20.7170697,62.0418675 C20.720844,61.6965529 20.8189765,53.5274671 22.3387711,48.9350344 C23.4685522,45.5184359 29.4722441,43.5335069 36.4258077,41.23477 C38.4790401,40.5567434 40.595178,39.856032 42.6295388,39.1036493 L42.6295388,32.7027257 C41.2380713,31.8381789 38.2261604,29.3075519 37.953151,23.4901344 C36.8208536,22.9167105 36.0949253,21.4321096 36.0949253,19.4963311 C36.0949253,17.6941416 36.7252374,16.2826365 37.7266915,15.6335962 C37.7128523,15.5882264 37.7002712,15.5415963 37.6876901,15.498747 C37.0309577,13.2277361 35.8080766,8.9995222 37.779532,6.85453856 C38.6123996,5.94588215 39.8415712,5.56023879 41.4544659,5.71651257 C43.0547794,2.521722 48.1689889,1.35849057 52.3521984,1.35849057 C56.9354863,1.35849057 62.6321998,2.75235185 63.6097499,6.68440178 C64.4690377,10.1488906 63.111539,13.5680097 62.3818363,15.4042266 C62.3730296,15.4256512 62.3642228,15.4470759 62.3554161,15.4697608 C63.3140944,16.1566092 63.9129539,17.5794568 63.9129539,19.3854272 C63.9129539,20.4075081 63.7078823,21.3779178 63.3354823,22.1202183 C63.0134066,22.7591764 62.575585,23.2242169 62.0572444,23.4888741 C61.7854931,29.3062916 58.7723241,31.8381789 57.3821147,32.7027257 L57.3821147,39.1023891 C59.748616,39.9770181 62.0496958,40.7382226 64.2828377,41.4780026 L63.9846661,42.5555355 L63.634912,43.6166848 L63.9846661,42.5555355 L63.5833296,43.599041 C61.1023404,42.7786037 58.5370579,41.9291801 55.873643,40.9234827 C55.4383376,40.7609076 55.1502309,40.3437574 55.1502309,39.8787169 L55.1502309,32.0398225 C55.1502309,31.5873847 55.4232403,31.1790564 55.8409322,31.0063991 C55.9956795,30.9396046 59.8467485,29.1890863 59.8467485,22.6318889 C59.8467485,22.0156157 60.3462174,21.5152875 60.9614323,21.5152875 C61.2155701,21.5152875 61.6823282,20.7061926 61.6823282,19.3854272 C61.6823282,18.0634014 61.2155701,17.2555668 60.9614323,17.2555668 C60.3462174,17.2555668 59.8467485,16.7539784 59.8467485,16.1377052 C59.8467485,15.7419796 60.0103025,15.3286103 60.3084741,14.5774879 C60.946335,12.9744214 62.1314728,9.99009632 61.4445458,7.22379837 C60.9211728,5.11914345 57.0990403,3.59295355 52.3521984,3.59295355 C47.6078727,3.59295355 43.7844821,5.11914345 43.2623672,7.22379837 C43.1176848,7.80352368 42.5439875,8.16270132 41.9589672,8.04927681 C41.0933888,7.87535921 39.9522848,7.78840042 39.420105,8.36686545 C38.3003888,9.58680915 39.3722969,13.2932703 39.8302483,14.8761725 C40.0680307,15.6991304 40.164905,16.0457053 40.164905,16.3607734 C40.164905,16.9783068 39.6654361,17.478635 39.0489631,17.478635 C38.7608564,17.478635 38.325551,18.2839491 38.325551,19.4963311 C38.325551,20.7099735 38.7608564,21.5152875 39.0489631,21.5152875 C39.6654361,21.5152875 40.164905,22.0156157 40.164905,22.6318889 C40.164905,29.2735245 44.1304618,30.9900155 44.1694632,31.0063991 C44.5871551,31.1790564 44.8601645,31.5873847 44.8601645,32.0398225 L44.8601645,39.8787169 C44.8601645,40.3424971 44.5733159,40.758387 44.1405267,40.9234827 C41.8444794,41.7981117 39.4452672,42.5908231 37.1253158,43.3570687 C31.2788874,45.2903266 25.2336779,47.2891186 24.456167,49.6370062 C23.3628711,52.9427007 23.0584089,58.5483924 22.9766319,60.9353483 L64.0916053,60.9353483 C64.7068201,60.9353483 65.2075472,61.4356765 65.2075472,62.0519497 C65.2075472,62.6694832 64.7068201,63.1698113 64.0916053,63.1698113"
                        id="Fill-1"
                      />
                      <path
                        d="M13.2600531,62.9754093 L1.1217525,62.9754093 C0.821994535,62.9754093 0.53488458,62.8558422 0.32366272,62.6443971 C0.11370566,62.4329521 -0.00265608328,62.1459909 -0.000126480156,61.8489609 C0.00366792453,61.5041041 0.102322446,53.3458488 1.63146753,48.7595048 C2.76599453,45.347436 8.80162759,43.3651385 15.7921858,41.0694493 C17.8576068,40.3923216 19.985003,39.6925392 22.0289223,38.9411541 L22.0289223,32.5487168 C20.6300518,31.6853161 17.6021169,29.1580442 17.3289197,23.3483394 C16.1893335,22.7756757 15.459543,21.2930431 15.459543,19.3598311 C15.459543,18.3630186 15.6695001,17.4152917 16.0489405,16.6903372 C16.3234025,16.1680175 16.6813413,15.765265 17.0999906,15.4984415 C17.0860778,15.4531319 17.0734298,15.4103394 17.0607818,15.3675469 C16.4005554,13.0995469 15.1724331,8.87693873 17.1531123,6.73479889 C18.0005293,5.81727836 19.2640661,5.44221509 20.9032489,5.60331609 C21.8986478,3.93566903 24.3144187,2.1245414 27.0413309,1.09374673 C30.2159828,-0.105700555 33.1136432,0.0176423973 35.2005658,1.44112075 C35.7115456,1.78975339 35.8418202,2.48450144 35.4914701,2.99297647 C35.1411201,3.5014515 34.4442144,3.63108746 33.9319698,3.28245483 C31.9588794,1.93575117 29.2673817,2.63930943 27.8381559,3.1792495 C24.9695859,4.26416404 22.891517,6.19485882 22.6651175,7.10356915 C22.5196653,7.68252586 21.9441806,8.0412273 21.3560479,7.92795316 C20.4858644,7.75426615 19.3374246,7.66742264 18.8036783,8.24512075 C17.6780049,9.46344706 18.7556159,13.1649942 19.2147388,14.7457978 C19.4550511,15.5676646 19.5511761,15.91378 19.5511761,16.2284304 C19.5511761,16.8451452 19.0490498,17.34481 18.4305619,17.34481 C18.2699321,17.34481 18.1282743,17.5512206 18.0372086,17.7236491 C17.8247219,18.1289188 17.7020362,18.7254959 17.7020362,19.3598311 C17.7020362,20.5718644 18.1409223,21.3761108 18.4305619,21.3761108 C19.0490498,21.3761108 19.5511761,21.8757756 19.5511761,22.4912317 C19.5511761,29.1240619 23.5378306,30.8382772 23.5783042,30.8546391 C23.9982183,31.0270675 24.2714155,31.4348544 24.2714155,31.8866923 L24.2714155,39.715194 C24.2714155,40.1783594 23.9843055,40.5936979 23.5492138,40.7585747 C21.2396861,41.6320442 18.8277096,42.4237046 16.4954155,43.1889343 C10.6178826,45.1196291 4.54051113,47.1157711 3.76012856,49.4605458 C2.6597512,52.7618577 2.35366923,58.3601174 2.27145712,60.7439088 L13.2600531,60.7439088 C13.8785411,60.7439088 14.3819321,61.2435736 14.3819321,61.8590297 C14.3819321,62.4757445 13.8785411,62.9754093 13.2600531,62.9754093"
                        id="Fill-3"
                      />
                      <path
                        fill={secondary}
                        d="M76.7681389,69.6228935 C76.672637,69.6228935 76.5771351,69.6102946 76.4828898,69.5850968 C75.9940709,69.4553281 75.6535313,69.0118466 75.6535313,68.5053707 L75.6535313,54.6364967 L67.7997577,54.6364967 C67.4026709,54.6364967 67.0357426,54.4248351 66.8359426,54.0796251 C66.6373992,53.735675 66.634886,53.309832 66.8321728,52.964622 L78.7900143,31.9836665 C79.0425917,31.5439647 79.5565426,31.3323031 80.0441049,31.4582921 C80.5316672,31.5880609 80.8722068,32.0315423 80.8722068,32.5380183 L80.8722068,46.4081522 L88.7259804,46.4081522 C89.1243238,46.4081522 89.4912521,46.6198138 89.6910521,46.9637638 C89.8895955,47.3089738 89.8908521,47.7335569 89.6935653,48.0787669 L77.7357238,69.0597225 C77.5334106,69.4137517 77.1601992,69.6228935 76.7681389,69.6228935 Z M69.7198483,52.4027109 L76.7681389,52.4027109 C77.3838747,52.4027109 77.8827464,52.9028874 77.8827464,53.5189738 L77.8827464,64.2998564 L86.8071464,48.6419379 L79.7575992,48.6419379 C79.14312,48.6419379 78.6442483,48.1417614 78.6442483,47.5244151 L78.6442483,36.7447925 L69.7198483,52.4027109 Z"
                        id="Fill-6"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconBusiness = {
  name: 'IconBusiness',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-business"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-1049.000000, -2239.000000)"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g
                  id="business-travel"
                  transform="translate(867.000000, 0.000000)"
                >
                  <g
                    id="business-travel-icon"
                    transform="translate(25.000000, 0.000000)"
                  >
                    <circle
                      id="Oval-3"
                      stroke={main}
                      stroke-width="2"
                      cx="65"
                      cy="65"
                      r="65"
                    />
                    <g
                      id="Page-1"
                      transform="translate(28.000000, 30.000000)"
                      fill={main}
                    >
                      <path
                        fill={secondary}
                        d="M58.971,68.7761429 C53.6167143,68.7761429 53.4267143,64.0661429 53.141,56.939 C53.0252857,54.0747143 52.8867143,50.6318571 52.4324286,46.6632857 L41.161,57.9347143 L41.161,63.0204286 C41.161,66.1947143 38.5795714,68.7761429 35.4067143,68.7761429 C31.0895714,68.7761429 30.1524286,65.4461429 29.2424286,62.2261429 C29.101,61.7204286 28.9524286,61.1961429 28.7867143,60.6618571 C28.2138571,60.4818571 27.6567143,60.3261429 27.1252857,60.1747143 C23.9538571,59.2761429 20.6738571,58.3475714 20.6738571,54.0432857 C20.6738571,50.8704286 23.2552857,48.2875714 26.4281429,48.2875714 L31.5152857,48.2875714 L42.7867143,37.0161429 C38.8324286,36.5647143 35.3967143,36.4275714 32.5367143,36.3132857 C25.3924286,36.0261429 20.6738571,35.8375714 20.6738571,30.4775714 C20.6738571,28.6775714 21.1767143,27.3004286 22.211,26.2732857 C25.0795714,23.4232857 31.8452857,23.4661429 46.691,23.5604286 C49.5538571,23.5775714 52.7152857,23.599 56.2024286,23.6004286 L62.5652857,17.239 C63.8624286,15.9404286 65.5738571,15.2247143 67.3867143,15.2247143 L67.3881429,15.2247143 C69.1995714,15.2247143 70.9124286,15.9404286 72.211,17.239 C74.9124286,19.9418571 74.9124286,24.1775714 72.211,26.8832857 L65.8481429,33.2475714 C65.8538571,38.4332857 65.9224286,42.819 65.9852857,46.7032857 C66.1781429,58.9475714 66.2667143,64.5347143 63.6881429,67.1547143 C62.5995714,68.2604286 61.101,68.7761429 58.971,68.7761429 M53.361,42.6775714 C53.4952857,42.6775714 53.6295714,42.699 53.761,42.7432857 C54.2167143,42.8947143 54.5467143,43.2904286 54.6152857,43.7647143 C55.3538571,48.9461429 55.5295714,53.3218571 55.671,56.8375714 C55.9781429,64.4604286 56.3181429,66.2432857 58.971,66.2432857 C60.3967143,66.2432857 61.2952857,65.9761429 61.8838571,65.3775714 C63.7167143,63.5147143 63.6238571,57.5575714 63.4524286,46.7432857 C63.3881429,42.719 63.3152857,38.159 63.3152857,32.7218571 C63.3152857,32.3875714 63.4495714,32.0647143 63.6867143,31.8275714 L70.4195714,25.0932857 C72.1167143,23.3918571 72.1181429,20.729 70.4195714,19.029 C69.5995714,18.209 68.5224286,17.7575714 67.3881429,17.7575714 L67.3867143,17.7575714 C66.2524286,17.7575714 65.1752857,18.2104286 64.3552857,19.029 L57.6224286,25.7618571 C57.3852857,26.0004286 57.0624286,26.1332857 56.7267143,26.1332857 C53.0252857,26.1332857 49.6838571,26.1118571 46.6752857,26.0932857 C33.4181429,26.009 26.1167143,25.9632857 23.9967143,28.069 C23.451,28.6132857 23.2067143,29.3561429 23.2067143,30.4775714 C23.2067143,33.1347143 24.9938571,33.4761429 32.6381429,33.7818571 C36.151,33.9218571 40.5224286,34.0975714 45.6838571,34.8347143 C46.1595714,34.9032857 46.5552857,35.2332857 46.7067143,35.6875714 C46.8581429,36.1432857 46.741,36.6447143 46.401,36.9847143 L32.9352857,50.4504286 C32.6967143,50.6875714 32.3752857,50.8218571 32.0395714,50.8218571 L26.4281429,50.8218571 C24.6524286,50.8218571 23.2067143,52.2675714 23.2067143,54.0432857 C23.2067143,56.3175714 24.391,56.7675714 27.8152857,57.7375714 C28.5738571,57.9518571 29.3595714,58.1747143 30.1952857,58.4532857 C30.5724286,58.579 30.8695714,58.8761429 30.9967143,59.2547143 C31.2581429,60.0375714 31.4738571,60.8061429 31.681,61.539 C32.6838571,65.0932857 33.1938571,66.2432857 35.4067143,66.2432857 C37.1824286,66.2432857 38.6281429,64.7975714 38.6281429,63.0204286 L38.6281429,57.4104286 C38.6281429,57.0747143 38.761,56.7518571 38.9981429,56.5147143 L52.4652857,43.049 C52.7067143,42.8075714 53.0295714,42.6775714 53.361,42.6775714"
                        id="Fill-1"
                      />
                      <path
                        d="M15.311,49.8814286 L8.36957143,49.8814286 C3.75385714,49.8814286 -0.000428571429,46.1271429 -0.000428571429,41.5128571 L-0.000428571429,17.8385714 C-0.000428571429,13.2242857 3.75385714,9.47 8.36957143,9.47 L48.6152857,9.47 C51.2195714,9.47 53.7181429,10.7214286 55.2995714,12.8185714 C55.721,13.3771429 55.6095714,14.1714286 55.051,14.5914286 C54.4924286,15.0128571 53.6981429,14.9014286 53.2767143,14.3442857 C52.1724286,12.8785714 50.4295714,12.0028571 48.6152857,12.0028571 L8.36957143,12.0028571 C5.151,12.0028571 2.53385714,14.6214286 2.53385714,17.8385714 L2.53385714,41.5128571 C2.53385714,44.73 5.151,47.3485714 8.36957143,47.3485714 L15.311,47.3485714 C16.0095714,47.3485714 16.5781429,47.9157143 16.5781429,48.6157143 C16.5781429,49.3142857 16.0095714,49.8814286 15.311,49.8814286"
                        id="Fill-3"
                      />
                      <path
                        d="M37.6225714,12.0032857 C36.924,12.0032857 36.3554286,11.4361429 36.3554286,10.7361429 L36.3554286,6.00185714 C36.3554286,4.089 34.7997143,2.53328571 32.8882857,2.53328571 L25.7854286,2.53328571 C23.874,2.53328571 22.3168571,4.089 22.3168571,6.00185714 L22.3168571,10.7361429 C22.3168571,11.4361429 21.7497143,12.0032857 21.0511429,12.0032857 C20.3511429,12.0032857 19.784,11.4361429 19.784,10.7361429 L19.784,6.00185714 C19.784,2.69185714 22.4768571,0.000428571429 25.7854286,0.000428571429 L32.8882857,0.000428571429 C36.1968571,0.000428571429 38.8897143,2.69185714 38.8897143,6.00185714 L38.8897143,10.7361429 C38.8897143,11.4361429 38.3225714,12.0032857 37.6225714,12.0032857"
                        id="Fill-6"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconBespoke = {
  name: 'IconBespoke',
  props: {
    invert: { type: Boolean, default: false }
  },
  render() {
    const main = this.invert ? invertMainColor : mainColor
    const secondary = this.invert ? invertSecondaryColor : secondaryColor
    return (
      <svg
        class="icon icon-bespoke"
        width="132px"
        height="132px"
        viewBox="0 0 132 132"
        version="1.1"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-1266.000000, -2239.000000)"
            stroke={main}
            stroke-width="2"
          >
            <g
              id="J4451_Blend_Homepage_Screen3"
              transform="translate(0.000000, 1800.000000)"
            >
              <g id="Group-5" transform="translate(158.000000, 440.000000)">
                <g id="bespoke" transform="translate(1084.000000, 0.000000)">
                  <g
                    id="bespoke-icon"
                    transform="translate(25.000000, 0.000000)"
                  >
                    <circle id="Oval-3" cx="65" cy="65" r="65" />
                    <g id="Page-1" transform="translate(31.000000, 31.000000)">
                      <path
                        d="M10.4318571,45.2042857 C9.75185714,43.77 9.209,42.3357143 8.79757143,40.9028571 L0.0718571429,39.0328571 L0.0718571429,29.9942857 L8.79757143,27.8114286 C9.42185714,25.3185714 10.3561429,23.1371429 11.6032857,20.9542857 L6.929,13.4742857 L13.4747143,6.92857143 L21.2661429,11.2928571 C23.1375714,10.3571429 25.319,9.42142857 27.499,8.79857143 L29.6818571,0.0714285714 L38.7218571,0.0714285714 L40.9018571,8.79857143 C43.3961429,9.42142857 45.2661429,10.3571429 47.4475714,11.6028571 L55.2404286,7.24 L61.7847143,13.7857143 L57.1104286,21.5785714 C58.3575714,23.4471429 59.2918571,25.9414286 59.9161429,28.1228571 L68.6432857,30.3042857 L68.6432857,39.3428571 L59.9161429,41.2142857 C59.2918571,43.7071429 58.3575714,45.8885714 57.1104286,47.76 L61.7847143,55.5514286 L55.2404286,62.0971429 L47.4475714,57.7342857 C45.2661429,58.9814286 43.0832857,59.9157143 40.9018571,60.5385714 L39.0332857,68.6428571 L29.9932857,68.6428571 L27.8118571,59.9157143 C26.2418571,59.5228571 24.7961429,59.0071429 23.4732857,58.3685714"
                        id="Stroke-1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M43.3657143,43.5315714 C46.7257143,40.1715714 47.8271429,35.4201429 46.6885714,31.1387143 C46.4042857,30.0701429 45.0671429,29.7072857 44.2871429,30.4887143 L37.6042857,37.1715714 C35.93,38.8458571 33.2171429,38.8458571 31.5428571,37.1715714 C29.87,35.4972857 29.87,32.7844286 31.5428571,31.1101429 L38.2257143,24.4272857 C39.0085714,23.6444286 38.64,22.3087143 37.5685714,22.023 C33.1657143,20.8558571 28.2685714,22.0558571 24.8971429,25.6444286 C21.2557143,29.5172857 20.5271429,35.2858571 22.6814286,39.9315714 L2.30285714,58.9187143 C0.628571429,60.593 1.34428571,64.023 3.01857143,65.6958571 C4.69285714,67.3701429 8.12142857,68.0844286 9.79428571,66.4115714 L28.7685714,46.0458571 C33.5428571,48.3101429 39.4157143,47.4801429 43.3657143,43.5315714 Z"
                        stroke={secondary}
                        id="Stroke-3"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export const IconList = [
  IconGroupPersonal,
  IconPersonal,
  IconVoluntary,
  IconJourney,
  IconBespoke,
  IconBusiness
]
