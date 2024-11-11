import { Link } from "react-router-dom";
import { Typography, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop,
        width: { md: "330px", xs: "380px" },
        height: "326px",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          {/* for check circle  */}
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 14, color: "grey", ml: "5px", mt: "2px" }}
            />
          </Typography>

          {/* for subscriber count  */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
