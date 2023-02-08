library(data.table)
library(stringr)
library(jsonlite)

download_table <- function (x, version_field) {
  download_dir <- getOption("hiplot.download_dir")
  latest <- read_json(file.path(download_dir, "last_update"))[[version_field]]
  dest <- file.path(download_dir, x, paste0("v", latest))
  md5sum <- fread(cmd = sprintf("cat %s/md5sum | sed 's;  ;\t;'", dest),
    sep = "\t", data.table = FALSE, header = FALSE)
  base_dir <- sprintf("https://download.hiplot.cn/download/%s/v%s", x, latest)
  finfo <- file.info(file.path(dest, md5sum[,2]))
  md5sum[,"Date"] <- as.Date(finfo$mtime, "%d%b%Y")
  md5sum[,"Size"] <- sapply(finfo$size, function(x) {
    utils:::format.object_size(x, "auto")
  })
  md5sum[,"URL"] <- file.path(base_dir, basename(md5sum[,2]))
  md5sum[,"File"] <- basename(md5sum[,2])
  md5sum <- md5sum[md5sum$File != "md5sum",]
  colnames(md5sum)[1] <- "MD5"
  md5sum[,"File"] <- sprintf("[%s](%s)", md5sum[,"File"], md5sum[,"URL"])
  md5sum <- md5sum[,c("File", "Size", "Date", "MD5")]
  knitr::kable(md5sum)
}
