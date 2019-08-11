import { Repository } from '../core/repository';

export class DiscoverRepository extends Repository {
  async topicalExplore() {
    const { body }: { body: ExploreResponseObjectInterface } = await this.client.request.send({
      url: '/api/v1/discover/topical_explore/',
      qs: {
        is_prefetch: true,
        omit_cover_media: false,
        use_sectional_payload: true,
        timezone_offset: this.client.state.timezoneOffset,
        session_id: this.client.state.clientSessionId,
        include_fixed_destinations: false,
      },
    });
    return body;
  }

  async markSuSeen() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/mark_su_seen/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }

  async profileSuBadge() {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/profile_su_badge/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      }),
    });
    return body;
  }
}

/**
 * TYPES
 */
interface Candidate {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions2 {
  candidates: Candidate[];
}

interface Location {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: any;
}

interface User {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  latest_reel_media?: any;
  is_favorite?: boolean;
  show_shoppable_feed?: boolean;
  shoppable_posts_count?: number;
  can_be_reported_as_fraud?: boolean;
}

interface User2 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

interface In {
  user: User2;
  position: any[];
  start_time_in_video_in_sec?: any;
  duration_in_video_in_sec?: any;
}

interface Usertags {
  in: In[];
}

interface CoverMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: any;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions2;
  original_width: number;
  original_height: number;
  location: Location;
  lat: number;
  lng: number;
  user: User;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  usertags: Usertags;
  caption?: any;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  can_viewer_reshare?: boolean;
}

interface Cluster {
  id: string;
  title: string;
  context: string;
  description: string;
  labels: any[];
  type: string;
  name: string;
  can_mute: boolean;
  is_muted: boolean;
  debug_info: string;
  cover_media: CoverMedia;
  ranked_position: number;
  followed_hashtags: any[];
}

interface Candidate2 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions22 {
  candidates: Candidate2[];
}

interface VideoVersion {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

interface FriendshipStatus {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User3 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface User4 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

interface In2 {
  user: User4;
  position: number[];
  start_time_in_video_in_sec?: any;
  duration_in_video_in_sec?: any;
}

interface Usertags2 {
  in: In2[];
}

interface FriendshipStatus2 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User5 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus2;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface Caption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: User5;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}

interface Explore {
  explanation: string;
  actor_id: number;
  source_token: string;
}

interface Media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions22;
  original_width: number;
  original_height: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: VideoVersion[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  user: User3;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  like_count: number;
  has_liked: boolean;
  top_likers: any[];
  photo_of_you: boolean;
  usertags: Usertags2;
  caption: Caption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore_hide_comments: boolean;
  algorithm: string;
  connection_id: string;
  mezql_token: string;
  explore_context: string;
  explore_source_token: string;
  explore: Explore;
  impression_token: string;
}

interface Channel {
  title: string;
  channel_id: string;
  channel_type: string;
  header: string;
  context: string;
  media: Media;
  media_count: number;
}

interface Candidate3 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions23 {
  candidates: Candidate3[];
}

interface VideoVersion2 {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

interface FriendshipStatus3 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User6 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus3;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media?: any;
}

interface MediaCroppingInfo {}

interface Thumbnails {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: string;
  sprite_urls: string[];
  thumbnails_per_row: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
}

interface FriendshipStatus4 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User7 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus4;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media?: any;
}

interface Caption2 {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: User7;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}

interface Explore2 {
  explanation: string;
}

interface Media2 {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions23;
  original_width: number;
  original_height: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: VideoVersion2[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  user: User6;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  title: string;
  product_type: string;
  nearly_complete_copyright_match: boolean;
  media_cropping_info: MediaCroppingInfo;
  thumbnails: Thumbnails;
  photo_of_you: boolean;
  caption: Caption2;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore: Explore2;
  mezql_token: string;
}

interface Candidate4 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions24 {
  candidates: Candidate4[];
}

interface VideoVersion3 {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

interface FriendshipStatus5 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User8 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus5;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media?: any;
}

interface MediaCroppingInfo2 {}

interface Thumbnails2 {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: string;
  sprite_urls: string[];
  thumbnails_per_row: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
}

interface FriendshipStatus6 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User9 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus6;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media?: any;
}

interface Caption3 {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: User9;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}

interface Explore3 {
  explanation: string;
}

interface Item {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: any;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions24;
  original_width: number;
  original_height: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: VideoVersion3[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  user: User8;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  title: string;
  product_type: string;
  nearly_complete_copyright_match: boolean;
  media_cropping_info: MediaCroppingInfo2;
  thumbnails: Thumbnails2;
  photo_of_you: boolean;
  caption: Caption3;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore: Explore3;
  mezql_token: string;
}

interface SeenState {}

interface Channel2 {
  id: string;
  items: Item[];
  more_available: boolean;
  seen_state: SeenState;
  title: string;
  type: string;
  max_id: string;
  user_dict?: any;
}

interface TvGuide {
  channels: Channel2[];
}

interface Igtv {
  media: Media2;
  tv_guide: TvGuide;
  display_content_metadata: boolean;
}

interface TwoByTwoItem {
  channel: Channel;
  igtv: Igtv;
}

interface Candidate5 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions25 {
  candidates: Candidate5[];
}

interface FriendshipStatus7 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User10 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus7;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface FriendshipStatus8 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User11 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus8;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface Caption4 {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: User11;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}

interface Explore4 {
  explanation: string;
  actor_id: number;
  source_token: string;
}

interface Candidate6 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions26 {
  candidates: Candidate6[];
}

interface VideoVersion4 {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

interface User12 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

interface In3 {
  user: User12;
  position: any[];
  start_time_in_video_in_sec?: any;
  duration_in_video_in_sec?: any;
}

interface Usertags3 {
  in: In3[];
}

interface CarouselMedia {
  id: string;
  media_type: number;
  image_versions2: ImageVersions26;
  original_width: number;
  original_height: number;
  video_versions: VideoVersion4[];
  video_duration: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  pk: string;
  carousel_parent_id: string;
  usertags: Usertags3;
}

interface Location2 {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}

interface User13 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

interface In4 {
  user: User13;
  position: any[];
  start_time_in_video_in_sec?: any;
  duration_in_video_in_sec?: any;
}

interface Usertags4 {
  in: In4[];
}

interface Media3 {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions25;
  original_width: number;
  original_height: number;
  user: User10;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  like_count: number;
  has_liked: boolean;
  top_likers: any[];
  photo_of_you: boolean;
  caption: Caption4;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore_hide_comments: boolean;
  algorithm: string;
  connection_id: string;
  mezql_token: string;
  explore_context: string;
  explore_source_token: string;
  explore: Explore4;
  impression_token: string;
  carousel_media_count?: number;
  carousel_media: CarouselMedia[];
  can_see_insights_as_brand?: boolean;
  location: Location2;
  lat?: number;
  lng?: number;
  usertags: Usertags4;
}

interface FillItem {
  media: Media3;
}

interface Candidate7 {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions27 {
  candidates: Candidate7[];
}

interface FriendshipStatus9 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User14 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus9;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface FriendshipStatus10 {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}

interface User15 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus10;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  latest_reel_media: number;
}

interface Caption5 {
  pk: string;
  user_id: any;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: User15;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
}

interface Explore5 {
  explanation: string;
  actor_id: any;
  source_token: string;
}

interface User16 {
  pk: any;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

interface In5 {
  user: User16;
  position: any[];
  start_time_in_video_in_sec?: any;
  duration_in_video_in_sec?: any;
}

interface Usertags5 {
  in: In5[];
}

interface Location3 {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}

interface VideoVersion5 {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

interface Media5 {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: any;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ImageVersions27;
  original_width: number;
  original_height: number;
  user: User14;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  like_count: number;
  has_liked: boolean;
  top_likers: string[];
  photo_of_you: boolean;
  caption: Caption5;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  explore_hide_comments: boolean;
  algorithm: string;
  connection_id: string;
  mezql_token: string;
  explore_context: string;
  explore_source_token: string;
  explore: Explore5;
  impression_token: string;
  usertags: Usertags5;
  location: Location3;
  lat?: number;
  lng?: number;
  commenting_disabled_for_viewer?: boolean;
  is_dash_eligible?: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities?: number;
  video_versions: VideoVersion5[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
}

interface Media4 {
  media: Media5;
}

interface LayoutContent {
  two_by_two_item: TwoByTwoItem;
  fill_items: FillItem[];
  medias: Media4[];
}

interface ExploreItemInfo {
  num_columns: number;
  total_num_columns: number;
  aspect_ratio: number;
  autoplay: boolean;
}

interface SectionalItem {
  layout_type: string;
  layout_content: LayoutContent;
  feed_type: string;
  explore_item_info: ExploreItemInfo;
}

export interface ExploreResponseObjectInterface {
  rank_token: string;
  auto_load_more_enabled: boolean;
  more_available: boolean;
  next_max_id: string;
  max_id: string;
  clusters: Cluster[];
  has_shopping_channel_content: boolean;
  sectional_items: SectionalItem[];
  status: string;
}
