import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelUrl, demoVideoUrl } from "./utils/Constant";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { md: "330px", xs: "380px", sm: "358" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { md: 330, xs: 380, sm: "358px" }, height: 190 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
          width: { md: 330, xs: 375 },
        }}
      >
        {/* for video title  */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{ width: { md: 300, xs: 375 } }}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>

        {/* for channel name  */}
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle}
            <CheckCircle
              sx={{ fontSize: 12, color: "grey", ml: "5px", mt: "2px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
