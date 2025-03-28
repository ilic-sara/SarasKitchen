FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

COPY ./WebAPIs/certs/localhost.pfx /https/localhost.pfx

COPY ./publish/WebAPIs/ .

ENV ASPNETCORE_URLS=https://+:5069

EXPOSE 5069

ENTRYPOINT ["dotnet", "WebAPIs.dll"]
